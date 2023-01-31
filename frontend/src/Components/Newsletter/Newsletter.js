import './Newsletter.css'
import { NavLink } from 'react-router-dom'

import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <div className='container'>
            <div className='newsletter-section'>
                <h1>Newsletter</h1>
                <h5>Join our newsletter to get exclusive contents, offers, services and first access to products.</h5>
                <div className='login-signup-container'>
                <NavLink type="button" className="login-newsletter btn btn-dark" to="/login">Login</NavLink>
                <NavLink type="button" className="signup-newsletter btn btn-dark" to="/signup">Signup</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter