
import React,{useEffect,useState} from 'react'
import styles from './navbar.module.css'
import { AiOutlineMenu } from "react-icons/ai";

import { useSelector, useDispatch } from 'react-redux'
import { TfiClose } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import toastr from 'toastr';
import 'toastr/build/toastr.css'

import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { getUSerProfileData, selectProfile } from '../../features/kudos/kudosSlice';

function Navbar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    console.log("called this effect")
    dispatch(getUSerProfileData())

  }, [])
  
  const profile = useSelector(selectProfile)


  const handleLogout = () => {

  navigate('/logout')


   

  }
  const handleSettings = () => {
    navigate('/openingbalance')
  }





   
  return (
      <nav className={styles.nav}>

      <div className={styles.header}>
      <p>{profile?.organization}</p>
      <p onClick={() => navigate('/kudos')}>Kudos</p>
      <p onClick={() => navigate('/kudos-giver')}>Kudos Giver</p>
      </div>
        <div className={styles.icon__div}>

           
            <p>{profile?.username}</p>
            <div className={styles.kudos}>
            <FaHeart 
            color='red'
            
           size={18}/>
              <span>{profile?.kudos_remaining}</span>
              
            </div>
            <div  className={styles.kudos}>
              
              <FaHeart 
              color='green'
              
             size={18}/>
             <span>{profile?.kudos_gain}</span>
            </div>

            <RiLogoutCircleRLine 
            onClick={handleLogout}
            className={styles.right__icon} size={18}/>
        </div>
       </nav>
  )
}

export default Navbar
