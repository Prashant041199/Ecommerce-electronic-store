import "./Card.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const Card = ({e, s}) => {


    const path1 = e.id
    const path2 = "/products/"

    const fpath = path2+path1;

    //  console.log(s) 

    return (
        <div>
            <div className="card">
                <img src={e.image} className="card-img-top" alt="..." />
                <div className="overlay">
                    <NavLink to={fpath} className="buynow"><p>Buy Now</p></NavLink>
                </div>
                <div className="card-body">
                    <div className="product">
                        <p className="brand">{e.company}</p>
                        <h5 className="card-title">{e.name}</h5>
                    </div>
                    <p className="card-text">&#8377; {e.price.toLocaleString('en-IN')}</p>
                </div>
            </div>
        </div>
    )
}

export default Card