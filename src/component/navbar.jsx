import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import {ShoppingCart} from 'phosphor-react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='apptitle'>
          <h1>FRUIT - O - LICIOUS</h1>
        </div>
        <div className='links'>
            <Link to='/'>Shop</Link>
            <Link to='/cart'><ShoppingCart size = {32}/></Link>
        </div>
    </div>
  )
}
