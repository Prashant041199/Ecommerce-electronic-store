import "./Cart.css"
import React from 'react'
import NavBar from "../../Components/Navbar/NavBar"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Cart = () => {

    const auth = localStorage.getItem("userData");
    const user = JSON.parse(auth)
    const [itemdetail, setItemdetail] = useState([])

    let subtotal = 0;

    let email = "guest"

    useEffect(() => {
        if (auth) {
            email = user.email
        } 
        const URL = "http://localhost:5000/cartitem/"
        const getCartItemURL = URL.concat(email)
        axios.get(getCartItemURL).then((res) => {
            const cartData = res.data
            setItemdetail(cartData)
            // console.log(cartData)
        })

    },[])


    const addQty = (id, qty) => {

        const url = "http://localhost:5000/cart/put/" + id + "/" + (qty + 1)

        axios.put(url).then(() => {
            const URL = "http://localhost:5000/cartitem/"
            const getCartItemURL = URL.concat(user.email)
            axios.get(getCartItemURL).then((res) => {
                const cartData = res.data
                setItemdetail(cartData)
            })
        })
    }


    const subQty = (id, qty) => {

        if (qty != 1) {
            const url = "http://localhost:5000/cart/put/" + id + "/" + (qty - 1)

            axios.put(url).then(() => {
                const URL = "http://localhost:5000/cartitem/"
                const getCartItemURL = URL.concat(user.email)
                axios.get(getCartItemURL).then((res) => {
                    const cartData = res.data
                    setItemdetail(cartData)
                })
            })
        }
    }

    const deleteItems = (_id) => {

        const url = "http://localhost:5000/cart/delete/" + _id
        axios.delete(url).then((res) => {
            console.log("item deleted")
            axios.delete(url).then(() => {
                const URL = "http://localhost:5000/cartitem/"
                const getCartItemURL = URL.concat(user.email)
                axios.get(getCartItemURL).then((res) => {
                    const cartData = res.data
                    setItemdetail(cartData)
                })
            })
        })
    }


    const deleteAllItems = (email) => {

        const url = "http://localhost:5000/cart/deleteall/" + email
        axios.delete(url).then((res) => {
            console.log("All deleted")
            axios.delete(url).then(() => {
                const URL = "http://localhost:5000/cartitem/"
                const getCartItemURL = URL.concat(user.email)
                axios.get(getCartItemURL).then((res) => {
                    const cartData = res.data
                    setItemdetail(cartData)
                })
            })
        })
    } 





    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="cart-container">
                    <h5>Electronic store Cart items</h5>
                    <hr></hr>
                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <td><p className="head">ITEM</p></td>
                                    <td><p className="head">PRICE</p></td>
                                    <td><p className="head">QUANTITY</p></td>
                                    <td><p className="head">SUBTOTAL</p></td>
                                    <td><p className="head">REMOVE</p></td>
                                </tr>
                            </thead>

                            <tbody>
                                {/* apply map here */}

                                {


                                    itemdetail.map((c) => {

                                        subtotal = subtotal + Math.round(c.qty * c.cartitem.price)

                                        return (
                                            <tr>
                                                <td>
                                                    <div className="item-cart-container">
                                                        <div className="cart-item">
                                                            <img src={c.cartitem.image} />
                                                            <div className="cart-item-about">
                                                                <p className="cart-item-name">{c.cartitem.name}</p>
                                                                <p className="brand">Brand: {c.cartitem.company}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>&#8377; {c.cartitem.price}</td>

                                                <td><div className='cart-quantity'>
                                                    <button onClick={() => subQty(c._id, c.qty)}>-</button>
                                                    <p>{c.qty}</p>
                                                    <button onClick={() => addQty(c._id, c.qty)}>+</button>
                                                </div></td>

                                                <td>&#8377; { Math.round(c.cartitem.price * c.qty)}</td>

                                                <td>
                                                    <button onClick={()=>deleteItems(c._id)} className="remove"><img src="https://img.icons8.com/color/25/null/delete-forever.png" /></button>
                                                </td>

                                            </tr>

                                        )

                                    })
                                }

                            </tbody>

                        </table>

                        <div className="shopping-clear-cart">
                            <NavLink to="/products" className="btn btn-dark">Continue Shopping</NavLink>
                            <button onClick={()=>deleteAllItems(user.email)} className="btn btn-warning">Clear Cart</button>
                        </div>
                        <div className="total-box">
                            <div className="total">
                                <div className="subtotal">
                                    <p className="tot-head">Subtotal:</p>
                                    <p>&#8377; {subtotal}</p>
                                </div>
                                <br></br>
                                <div className="subtotal">
                                    <p className="tot-head">Shipping Fee:</p>
                                    <p>&#8377; 50</p>
                                </div>
                                <hr></hr>
                                <br></br>
                                <div className="subtotal">
                                    <p className="tot-head">Total:</p>
                                    <p>&#8377; {subtotal + 50}</p>
                                </div>
                                <br></br>
                                <button className="btn btn-danger place-order">Place Your Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart