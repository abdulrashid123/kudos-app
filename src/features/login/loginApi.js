import axios from '../../axios'
import toastr from 'toastr';
import 'toastr/build/toastr.css'


export async function SignInApi(creds){
        const result = await axios.post(
            `/api/token/`,
            creds
        ).then((response) => {
            
            toastr.success("Successfully Logged In")
            return response
        }).catch(err => {
          console.log(err,"error_message_sign_in")
            toastr.error("Username or Password is Wrong")
            return err
        })
        return result
}


export async function VerifyUserApi() {
 
    let AuthStr = sessionStorage.getItem("token")
    const result = await axios.get(`/kudos/verify-user/`,{ 'headers': { 'Authorization': `Bearer ${AuthStr}`  }})
      .then((response) => {
            // toastr.success("successfully login")
        return {verify:true,access:response.data.access,role:response.data.role}
      }, (error) => {
        console.log(error)
        toastr.success("successfully logged out")
     
        return  {verify:false}
      });
    return result
  }

 