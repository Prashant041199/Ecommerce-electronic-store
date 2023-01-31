import './LoginPage.css'

import React from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import { NavLink } from 'react-router-dom'
import ScrollToTop from '../../Components/ScrollToTop'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs'


const LoginPage = () => {


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const auth = localStorage.getItem("userData")

    const [error, seterror] = useState("")
    const passwordinpref = useRef()





    useEffect(() => {

        if (auth) {
            navigate("/")
        }

    }, [])

    const URL = "http://localhost:5000/login/"


    const login = () => {
        axios.get(URL, {
            params: {
                email: email,
                password: password
            }
        }).then((res) => {

            if (res.data.length != 0) {
                localStorage.setItem("userData", JSON.stringify(res.data[0]))
                navigate("/")
            } else {
                seterror("*Username of Password invalid*")
            }

        }).catch((err) => {
            console.log("err", err)
            seterror("*Username of Password invalid*")
        })
    }

    const encryptPassword = async (a) => {
        const hashedPassword = await bcrypt.hashSync(passwordinpref.current.value, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        // console.log(hashedPassword)
        setpassword(hashedPassword)
    }




    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <div className='container'>
                <div className='login-container col-sm-12'>
                    <div className='login-wrapper'>
                        <div className="px-4 py-3">
                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleDropdownFormEmail1" value={email} onChange={(a) => setemail(a.target.value)} placeholder="email@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleDropdownFormPassword1" ref={passwordinpref} onChange={(a) => encryptPassword(a)} placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <p>Dont have an account? <NavLink className='signup' to='/signup'>Click here</NavLink></p>
                                </div>
                            </div>
                            <p className='error'>{error}</p>
                            <NavLink onClick={login} className="btn btn-dark">Sign in</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage