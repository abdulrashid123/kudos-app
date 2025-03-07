import React, { useEffect } from 'react'

import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeLogin, clearLogin } from './loginSlice'
import { clearKudos } from '../kudos/kudosSlice'

function Logout() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearLogin())
    dispatch(clearKudos())
    sessionStorage.clear()
    dispatch(changeLogin(false))
  }, [])
  

    
    return null
}

export default Logout