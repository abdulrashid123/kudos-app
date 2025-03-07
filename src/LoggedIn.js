import React from 'react'
import { useSelector } from 'react-redux'

import { Navigate } from 'react-router-dom'
import { selectLoginStatus } from './features/login/loginSlice'
function LoggedIn({children}) {
    const loginStatus = useSelector(selectLoginStatus)
    if(loginStatus ){
        return <Navigate to="/kudos"/>
    }
    return children

}

export default LoggedIn