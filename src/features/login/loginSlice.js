import toastr from 'toastr';
import 'toastr/build/toastr.css'
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { SignInApi,  VerifyUserApi, } from './loginApi';



const initialState = {
    status:"idle",
    isLoggedIn:null,
    data:null,


  };

  export const loginUser = createAsyncThunk(
    'login/SignInApi',
    async (creds) => {
      
      const response = await SignInApi(creds);
     
      return response.data;
    }
  );

  


  export const verifyUser = createAsyncThunk(
    'login/VerifyUserApi',
    async () => {
      
      const response = await VerifyUserApi();
      return response;
    }
  );



//   function splitAndDestructure(inputString) {
//     // Split the string by "-"
//     var [word1, word2] = inputString.split("-").map(function(word) {
//         return word.trim();
//     });

//     return [word1, word2];
// }


  export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      clearLogin:() => initialState,

      changeLogin:(state,{payload}) => {
        state.isLoggedIn =payload
      },
    
     
    },
    extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'idle';
            if(action.payload){

              const token = action.payload?.access
              const refresh = action.payload?.refresh

                  state.isLoggedIn = true
                  sessionStorage.setItem('token',token)
                  sessionStorage.setItem('refresh',refresh)
  
              
            }
           
          });
          builder
          .addCase(verifyUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(verifyUser.fulfilled, (state, action) => {
            state.status = 'idle';
            state.isLoggedIn = true
            const token = action.payload?.access
            const refresh = action.payload?.refresh
            sessionStorage.setItem('token',token)
            sessionStorage.setItem('refresh',refresh)
                
                
           
            
          })
         
    }
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
  
  });

  
  export const { clearLogin,changeLogin } = loginSlice.actions
  export const selectLoadingStatus = state => state.login.status
  export const selectLoginStatus = state => state.login.isLoggedIn

  export default loginSlice.reducer