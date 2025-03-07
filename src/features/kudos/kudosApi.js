import toastr from 'toastr';
import 'toastr/build/toastr.css'
import axios from '../../axios'


export async function getUserProfile() {
   
    let AuthStr = sessionStorage.getItem("token")
    const result = await axios.get(`/kudos/get-user-profile/single/`,{ 'headers': { 'Authorization': `Bearer ${AuthStr}`  }})
      .then((response) => {
            
        return response
      }, (error) => {
        toastr.error(error.message)
     
        return error
      });
    return result
  }


  export async function getKudosReceived() {
   
    let AuthStr = sessionStorage.getItem("token")
    const result = await axios.get(`/kudos/get-user-kudos/`,{ 'headers': { 'Authorization': `Bearer ${AuthStr}`  }})
      .then((response) => {
          
        return response
      }, (error) => {
        toastr.error(error.message)
     
        return error
      });
    return result
  }


  export async function getUsers() {
   
    let AuthStr = sessionStorage.getItem("token")
    const result = await axios.get(`/kudos/get-user-profile/`,{ 'headers': { 'Authorization': `Bearer ${AuthStr}`  }})
      .then((response) => {
            
        return response
      }, (error) => {
        toastr.error(error.message)
     
        return error
      });
    return result
  }


  export async function giveKudos(data){
    let AuthStr = sessionStorage.getItem("token")

    const result = await axios.post(
        `/kudos/create-kudos/`,
        data,{ 'headers': { 'Authorization': `Bearer ${AuthStr}`  }}
    ).then((response) => {
        toastr.success("Successfully Kudos Send")
        return response
    }).catch(err => {
      console.log(err,"error_message_sign_in")
        toastr.error(err.message)
        return err
    })
    return result
}