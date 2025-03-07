
import React, { useState } from 'react';
import styles from './error.module.css'


class ErrorBoundary extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { hasError: false };
   
    console.log("ero9r")
    console.log(this.state)
  }
  
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    
    this.setState({ hasError: true });

    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  
  render() {
    if (this.state.hasError) {
     
      return (
        <div className={styles.container}>
        <img src='/caution.png' alt="Something Went Wrong" className={styles.image} />
        <h1 className={styles.title}>Oops! Something Went Wrong</h1>
        <p className={styles.message}>We encountered an unexpected issue. Please try again later.</p>
        <p className={styles.contact}>If the problem persists, please <a href="mailto:support@autocounts.com" className={styles.email}>contact us</a>.</p>
      </div>
  
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
