import './ListCard.css'


import React from 'react'
import { NavLink } from 'react-router-dom'

const ListCard = ({e , s}) => {
    return (
            <div className="card mb-3 list-card-wrap">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={e.image} className="img-fluid product-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body list">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">&#8377; {e.price.toLocaleString('en-IN')}</p>
                            <p className="card-text">{e.description}</p>
                            <br></br>
                            <NavLink to={e.id} className='btn btn-dark'>Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ListCard