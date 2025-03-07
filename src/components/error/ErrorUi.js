import React from 'react'
import styles from './error.module.css'
function ErrorUi() {
  return (
    <div className={styles.container}>
    <img src='./caution.png' alt="Something Went Wrong" className={styles.image} />
    <h1 className={styles.title}>Oops! Something Went Wrong</h1>
    <p className={styles.message}>We encountered an unexpected issue. Please try again later.</p>
    <p className={styles.contact}>If the problem persists, please <a href="mailto:support@autocounts.com" className={styles.email}>contact us</a>.</p>
    <a href="/" className={styles.homeButton}>
      Go to Home
    </a>
    </div>
  )
}

export default ErrorUi