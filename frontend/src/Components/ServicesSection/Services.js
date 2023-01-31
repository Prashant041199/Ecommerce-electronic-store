import "./Services.css"
import Card from "../Card/Card"
import { useState , useEffect} from 'react'
import axios from "axios"
import React from 'react'

const Services = () => {

    const [item, setitem] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/productITems").then((res)=>{
            // console.log(res.data[0].id)
            setitem(res.data)
        })
    },[])

    // console.log()

    return (
        <div>
            <div className="dark-section">
                <div className="container">
                    <div className="service-container">
                        <h6>Check Now!</h6>
                        <h1>Our Feature Services</h1>
                        <div className="Card-Container">
                            {
                                item.map((e)=>{
                                    if(e.featured===true){
                                        const {id} = e;
                                        // console.log(id)
                                        return <Card e={e} s={e.id}/>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services