import React from 'react'
import './spinner.css'
function Spinner() {
  return (
    <div className="loader-outer" id="preloader">
      <div className="loader-container">
        <div className="loader-inner">
          <div id="loader">
            <div id="shadow"></div>
            <div id="box"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner