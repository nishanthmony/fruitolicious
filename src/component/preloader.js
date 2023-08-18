import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations';

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[]);



  return (
    <div className='preloader'>
        <div className='texts-container'>
            <img src="./assets/logo.jpg" alt=''/>
            <span>FRUIT</span>
            <span><b> - O - </b></span>
            <span>LICIOUS</span>
        </div>
    </div>
  )
}

export default Preloader