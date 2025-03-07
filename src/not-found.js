import React from 'react'
import styles from './PageNotFound.module.css'

import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
    <img src='/not found.png' alt="Not Found" className={styles.image} />  
    <h1 className={styles.message}>PAGE NOT FOUND !</h1>
    <p className={styles.detail}>Oops! We Couldn't find the page that you're looking for.</p>
    <p className={styles.detail}>Please check the address and try again.</p>
    <a href="/kudos" className={styles.homeButton}>
      Go to Home
    </a>
  </div>

  )
}

export default NotFound