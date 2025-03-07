import axios from "axios";
import toastr from 'toastr';
import 'toastr/build/toastr.css'

const BASE_URL = 'http://localhost:8000'




const axiosInstance = axios.create({
    baseURL:BASE_URL,
    // timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});








  


axiosInstance.interceptors.response.use(
    response => {
    
        return response;
    
    },
    async error => {
        
       
        const originalRequest = error.config;
        console.log(  originalRequest.url,"originalRequest")
        if(error.code === "ERR_NETWORK" ){
       
            window.location.href = '/maintenance'
        }
       
       if(error.response.status === 503){
           window.location.href = '/maintenance'
       }
      
       if(error.response.status === 502 ){
       
           window.location.href = '/maintenance'
       }


        if (error.response.status === 401 && (
            originalRequest.url === 'api/token/refresh/'
        )) {
            // Redirect to login page if the refresh token has expired
            toastr.info("Session Expired logging Out")
            sessionStorage.clear()
            // window.location.href = '/login';
            
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry ) {
            originalRequest._retry = true;
            const refreshToken = sessionStorage.getItem('refresh');
           
            return axiosInstance.post('api/token/refresh/', {refresh: refreshToken})
                .then(res => {
                    if (res.status === 200) {
                        console.log(res,"login")
                        sessionStorage.setItem('token', res.data.access);
                        axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + res.data.access;
                        originalRequest.headers['Authorization'] = 'Bearer ' + res.data.access;
                        return axiosInstance(originalRequest);
                    }
                });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;