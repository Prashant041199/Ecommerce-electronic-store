import './Navbar.css'

import React from 'react'
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const NavBar = () => {

    const auth = localStorage.getItem("userData")
    const user = JSON.parse(auth)
    const navigate = useNavigate()

    const [uName, setuName] = useState("Guest")
    const [cartItemNumber, setcartItemNumber] = useState(0)

    const cartitemurl = "http://localhost:5000/cartitem/"

    useEffect(() => {
        if (auth) {
            setuName(user.firstname)
            axios.get(cartitemurl + user.email).then((res) => {

                console.log("getting cart number")
                const cartnum = res.data.length
                localStorage.setItem("cartNum", res.data.length)
                setcartItemNumber(cartnum)
            })

        }
    })


    const logoutFn = () => {
        localStorage.clear()
        navigate("/")
    }


    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark mynav">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><span>Electronic</span> Store</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">Welcome, {
                                    (auth) ? <span className='username'>{uName}</span> : <span>Guest</span>
                                }</span>
                            </li>

                        </ul>

                        {
                            (auth) ? <Link to="/" onClick={logoutFn} className="btn btn-light inout">Logout</Link> : <Link to="/login" className="btn btn-light">Login</Link>
                        }

                        <li className="nav-item">
                            {/* <NavLink to="/cart" className='cart-btn'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVR4nO3WyytEcRTA8fEmhJCNsFA2dlZiYYeysLGRhYUk/4AFpSykvEaJbGzEmlhSNuIORjQszMKk7p0RSZrGjHt/vpr8Fh5d444fpZw6u9Pvc8859+Vy/YeKAHKAIiDrN7AAL2EBG0Dxb3RWBazeR82dKY/RqzQ1vWfiQC95D1cIIZ7mvSGmPYbSnNT0zg+dPloisO6/VY6NHxqVHzBTiNmTq7CpEpryGOd2O2wLx6yI2s70eTssX4C1eHylDHNrwQ7bOzRqCu/mxZ2aEWr604zXKP3scRj230YeFO3ryBaSWH3MEjH3voIxavpAIizNEoRXTq+/iy0P+3yZrkQhYO0mYs7N7Bl1yaR7N1SWEHnVXQdwCbx9zfxEAKnAChACFoAxhzkEpDhFW4CRJLBBx5gEa4EGID1BXTXQBGQ7RuQBo8A9EAS2gQybuj4gLPd8BhQ4hfLkR7UmfrXyQ9tqUxsCmuWud+K4UywORIFGoFQe2GRTGwC6gFzgBOh2hMlD+oFHwASW7JYOtMsxxmu3kv6nAQqB8i+OvSop5E/HM3ZtOlrEmYd9AAAAAElFTkSuQmCC" /></NavLink> */}
                            <NavLink to="/cart" className='cart-btn'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjklEQVR4nOWWu0oDQRSGRwXFRrS00EpFBJuIkYClKewstDAPINhEOysLC8HCJxDSeQMveQBRO2sJFoIXEGzWxkat1E8GTmBMdrMzs8kW+sF05z//nLNzdkapfwmwCKzJWgfm0zK+4DcvQFcaxufUU2i5cRVdJRDQfK6BHtUIYJPWMBZnPAh8SvADsOW5Dg3Ts4amhnlZBO9An5WoPsep5PgCMraivLHbFQ/THPAt+pKLsA24FeEd0O6ovRLtBzDguutVo+q8g65g6DacTDVAL/AmCcrKAqATuBdNEDtCUQA7kkSf8jlgJmZtG9UuKV+AjOfM3gAdSYyXPUwD6/EJA+gHXiXZo4xYXKungW6VBKBkVDGbKJkLwJOYViwqjVoTzboqXbn0MR4HnlM3Nu7nXKqt1gDD+pIAFmzmUsdIrNYMxcWHAkzJT77KscNViGizcZo6gIOQbzbSIH40JH5PuQLshySKbJ/eVEj8ro9xtqbVRxaak5pWTzoba3SFQFE/8G0eAzpGYoveh0v9VX4AB4SuBs3w3gkAAAAASUVORK5CYII="/></NavLink>
                            <span className='cart-num'>{cartItemNumber}</span>
                        </li>
                    </div>
                </div>
            </nav >

        </div >
    )
}

export default NavBar