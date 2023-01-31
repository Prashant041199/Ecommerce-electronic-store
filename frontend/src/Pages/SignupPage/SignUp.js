import './SignUp.css'
import React, { useRef } from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import ScrollToTop from '../../Components/ScrollToTop'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs'


const SignUp = () => {
    const [first, setfirst] = useState("")
    const [last, setlast] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [userpresent, setuserpresent] = useState("")
    const [thankyou, setthankyou] = useState("")
    const navigate = useNavigate()
    const passwordinpref = useRef()
  

    const auth = localStorage.getItem("userData")


    useEffect(() => {

        if (auth) {
            navigate("/")
        }

    }, [])

    const encryptPassword = async (a) =>{
        const hashedPassword = await bcrypt.hashSync(passwordinpref.current.value,'$2a$10$CwTycUXWue0Thq9StjUM0u')
        // console.log(hashedPassword)
        setpassword(hashedPassword)
    }

    // encryptPassword()



    const registerUser = (event) => {

        event.preventDefault()

        const URL = "http://localhost:5000/getregistered/"
        const checkUrl = URL.concat(email);

        // console.log(checkUrl)
        axios.get(checkUrl).then((res) => {
            console.log("check", res.data)
            // setcheckEmail(res.data)
            if (res.data.length === 0) {
                axios.post('http://localhost:5000/register', {
                    firstname: first,
                    lastname: last,
                    email: email,
                    password: password
                }).then((res) => {
                    console.log(res)
                    setuserpresent("")
                    setthankyou("Thank you for registering with us.")
                    localStorage.setItem("userData", JSON.stringify(res.data))
                    navigate("/")
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                setuserpresent("User already present. Please try logging in")
                setthankyou("")
            }

        })
    }

    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <div className='container'>
                <div className='login-container col-sm-12'>
                    <div className='login-wrapper'>
                        <div className="px-4 py-3">
                            <form onSubmit={registerUser}>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" value={first} onChange={(a) => setfirst(a.target.value)} className="form-control" id="firstname" placeholder="First Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <input type="text" value={last} onChange={(a) => setlast(a.target.value)} className="form-control" id="lastname" placeholder="Last Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email Address</label>
                                    <input type="email" value={email} onChange={(a) => setemail(a.target.value)} className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                                    <input type="password" ref={passwordinpref} onChange={(a) => encryptPassword(a)} className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" required />
                                </div>
                                <div className="mb-3">
                                    <p className='alert-thankyou'>{thankyou}</p>
                                    <p className='alert-present'>{userpresent}</p>
                                </div>
                                <button type='submit' className="btn btn-dark">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp