import './Map.css'
import React from 'react'
import Footer from '../Footer/Footer'
import axios from "axios"
import { useState } from 'react'

const Map = () => {

    const URL = "http://localhost:5000/sendquery";

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [query,setquery] = useState("")

    const sendQuery=(e)=>{
        e.preventDefault()
        axios.post(URL,{
            name:name,
            email:email,
            query:query
        }).then(()=>{
            console.log("query Sent")
        })
    }


    return (
        <div>
            <h1 className='map-heading'>Feel Free To Contact Us</h1>
            <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112283.93403139562!2d76.91970916878452!3d28.423090603198496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1674138736015!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className='container'>
                <div className='form-container'>
                    <form onSubmit={sendQuery}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input value={name} onChange={(a)=>setname(a.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input value={email} onChange={(a)=>setemail(a.target.value)} type="email" className="form-control" id="exampleInputPassword1" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Your Query</label>
                            <textarea value={query} onChange={(a)=>setquery(a.target.value)} className="form-control textarea-size" required />
                        </div>
                        <button type="submit" className="btn btn-dark">Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Map