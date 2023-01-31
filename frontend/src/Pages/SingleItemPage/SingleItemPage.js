import './SingleItemPage.css'

import React from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import { useState, useEffect } from 'react'
import ScrollToTop from '../../Components/ScrollToTop'
import axios from 'axios'
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom'

const SingleItemPage = ({ singleItem, key }) => {

    const logoutFn = () => {
        localStorage.clear()
        navigate("/")
    }

    const navigate = useNavigate()

    const [uName, setuName] = useState("Guest")


    const [quantity, setquantity] = useState(1);
    const auth = localStorage.getItem("userData")
    const user = JSON.parse(auth)
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
    }, [])

    const addToCartfn = () => {
        console.log("http://localhost:5000/cartitem/" + user.email)
        axios.get("http://localhost:5000/cartitem/" + user.email).then((res) => {


            let count = 0;
            res.data.map((e) => {

                if (e.cartitem.id == singleItem.id) {
                    count = count + 1;
                }

                // console.log(count)
            })

            const deal = singleItem.price - (20 * singleItem.price / 100)

            if (count == 0) {
                axios.post("http://localhost:5000/cart", {
                    email: user.email,
                    cartitem: {
                        id: singleItem.id,
                        name: singleItem.name,
                        company: singleItem.company,
                        price: deal,
                        image: singleItem.image,
                        description: singleItem.description,
                        category: singleItem.category,
                        featured: singleItem.featured
                    },
                    qty: quantity
                }).then((res) => {
                    console.log(res.data)
                    axios.get("http://localhost:5000/cartitem/" + user.email).then((res) => {
                        localStorage.setItem("cartNum", res.data.length)
                        setcartItemNumber(res.data.length)
                    })
                })

            } else {
                console.log("item already present")
            }

        })

    }


    return ( 
        <div>
            <ScrollToTop />
            <div >
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
                                        (auth) ? <span>{uName}</span> : <span>Guest</span>
                                    }</span>
                                </li>

                            </ul>

                            {
                                (auth) ? <Link to="/" onClick={logoutFn} className="btn btn-light inout">Logout</Link> : <Link to="/login" className="btn btn-light">Login</Link>
                            }

                            <li className="nav-item">
                                {/* <NavLink to="/cart" className='cart-btn'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVR4nO3WyytEcRTA8fEmhJCNsFA2dlZiYYeysLGRhYUk/4AFpSykvEaJbGzEmlhSNuIORjQszMKk7p0RSZrGjHt/vpr8Fh5d444fpZw6u9Pvc8859+Vy/YeKAHKAIiDrN7AAL2EBG0Dxb3RWBazeR82dKY/RqzQ1vWfiQC95D1cIIZ7mvSGmPYbSnNT0zg+dPloisO6/VY6NHxqVHzBTiNmTq7CpEpryGOd2O2wLx6yI2s70eTssX4C1eHylDHNrwQ7bOzRqCu/mxZ2aEWr604zXKP3scRj230YeFO3ryBaSWH3MEjH3voIxavpAIizNEoRXTq+/iy0P+3yZrkQhYO0mYs7N7Bl1yaR7N1SWEHnVXQdwCbx9zfxEAKnAChACFoAxhzkEpDhFW4CRJLBBx5gEa4EGID1BXTXQBGQ7RuQBo8A9EAS2gQybuj4gLPd8BhQ4hfLkR7UmfrXyQ9tqUxsCmuWud+K4UywORIFGoFQe2GRTGwC6gFzgBOh2hMlD+oFHwASW7JYOtMsxxmu3kv6nAQqB8i+OvSop5E/HM3ZtOlrEmYd9AAAAAElFTkSuQmCC" /></NavLink> */}
                                <NavLink to="/cart" className='cart-btn'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjklEQVR4nOWWu0oDQRSGRwXFRrS00EpFBJuIkYClKewstDAPINhEOysLC8HCJxDSeQMveQBRO2sJFoIXEGzWxkat1E8GTmBMdrMzs8kW+sF05z//nLNzdkapfwmwCKzJWgfm0zK+4DcvQFcaxufUU2i5cRVdJRDQfK6BHtUIYJPWMBZnPAh8SvADsOW5Dg3Ts4amhnlZBO9An5WoPsep5PgCMraivLHbFQ/THPAt+pKLsA24FeEd0O6ovRLtBzDguutVo+q8g65g6DacTDVAL/AmCcrKAqATuBdNEDtCUQA7kkSf8jlgJmZtG9UuKV+AjOfM3gAdSYyXPUwD6/EJA+gHXiXZo4xYXKungW6VBKBkVDGbKJkLwJOYViwqjVoTzboqXbn0MR4HnlM3Nu7nXKqt1gDD+pIAFmzmUsdIrNYMxcWHAkzJT77KscNViGizcZo6gIOQbzbSIH40JH5PuQLshySKbJ/eVEj8ro9xtqbVRxaak5pWTzoba3SFQFE/8G0eAzpGYoveh0v9VX4AB4SuBs3w3gkAAAAASUVORK5CYII=" /></NavLink>

                                <span className='cart-num'>{cartItemNumber}</span>
                            </li>
                        </div>
                    </div>
                </nav >

            </div >
            <div className='container'>
                <div className='item-container'>
                    <div className='image-section'>

                        <img src={singleItem.image} />
                    </div>
                    <div className='about-item-section'>
                        <h3>{singleItem.name}</h3>
                        <p className='mrp'>MRP : &#8377; <del>{singleItem.price}</del></p>
                        <p className='deal'>Deal of the day : &#8377; <span className='deal-price'>{singleItem.price - (20 * singleItem.price / 100)}</span></p>
                        <article>{singleItem.description}</article>
                        <div className='features-container-item'>
                            <div className='about-item-image'>
                                <img src="https://img.icons8.com/pastel-glyph/45/null/fast-delivery--v1.png" />
                                <p>Fast Delivery</p>
                            </div>
                            <div className='about-item-image'>
                                <img src="https://img.icons8.com/windows/45/null/replay-30.png" />
                                <p>30 Days Replacement</p>
                            </div>
                            <div className='about-item-image'>
                                <img src="https://img.icons8.com/material-outlined/45/null/2002.png" />
                                <p>2 Years Warranty</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='stock-container'>
                            <p className='available'>Available: {(singleItem.shipping) ? <span>In Stock</span> : <span>Out Of Stock</span>}</p>
                            <p className='stock-container-brand'>Brand: <span> {singleItem.company}</span></p>
                            <hr></hr>
                        </div>

                        <div className='quantity'>
                            <button onClick={() => setquantity(quantity - 1)}>-</button>
                            <p>{quantity}</p>
                            <button onClick={() => setquantity(quantity + 1)}>+</button>
                        </div>
                        <div className='add-to-cart'>
                            <button onClick={addToCartfn} className='btn btn-dark'>Add To Cart</button>
                            {/* <button onClick={() => window.location.reload(true)} className='btn btn-dark'>Add To Cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleItemPage