import "./WelcomeSection.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WelcomeSection = () => {
  return (
    <div>
        <div className="container">
            <div className="weclomeflex">
                <div className="left">
                    <div className="left-container">
                        <h6>Welcome to</h6>
                        <h1>Electronic Store</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapiente placeat aut quibusdam dicta vel. Enim perferendis beatae nam nemo laudantium architecto, vero voluptatibus aspernatur ipsum harum et ipsa ab?</p>
                        <NavLink type="button" className="shop btn btn-dark" to="/products">Shop Now</NavLink>
                    </div>
                </div>
                <div className="right">
                    <div className="rightimage">
                        <img src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeSection