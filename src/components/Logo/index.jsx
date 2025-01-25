import React from 'react'
import './Logo.css'
import { logo } from '../../assets'
const Logo = () => {
  return (
    <div className='flex__center Logo__container'>
       <div className='flex__center icon__container'> 
        <img src={logo} alt='logo' className='' />
       </div>
       <h2 className='title'>ComfoRooms <span className='primary'>LTD</span></h2>
    </div>
  )
}

export default Logo
