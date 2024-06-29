import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  
  const[sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true):setSticky(false)
    })

  },[])


 
 
  return (
    <div>
        <nav className={`container ${sticky ? 'dark-nav':''} ` }>
            <img src={logo} alt="" className='logo' />
            <ul className='ul'>
                <li> Home</li>
                <li>  About us</li>
                <li>Program</li>
                <li>Campus</li>
                <li><button className="btn">Contact us</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
