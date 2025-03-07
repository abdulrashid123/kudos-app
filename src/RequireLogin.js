

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { selectLoadingStatus, selectLoginStatus } from './features/login/loginSlice'



function RequireLogin({children}) {
   
    const loginStatus = useSelector(selectLoginStatus)
    const loading= useSelector(selectLoadingStatus)
   
    const location = useLocation()
    const navigate = useNavigate()
   
    if(loading === "idle" && loginStatus) {
       console.log("kudos inside")
        return children
    }
    if(loading === "idle" && loginStatus === false){
      return <Navigate to="/login"/>
    }

  
   
    

}

export default RequireLogin