import React, { useState } from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ProductsDiv from '../../Components/ProductsDiv/ProductsDiv'
import './Products.css'
// import item from "../../item.json"
import ScrollToTop from '../../Components/ScrollToTop'
import Footer from '../../Components/Footer/Footer'
import axios from "axios"
import { useEffect } from 'react'

const Products = () => {



    const [item, setitem] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/productITems").then((res) => {
            setitem(res.data)
        })
    }, [])

    // for company

    const [company, setcompany] = useState("All")

    const getCompany = (valueName) => {

        setcompany(valueName)
    }

    //for category


    const [category, setcategory] = useState("")

    const getCategory = (valueName) => {
        
        

        const db = "http://localhost:5000/productITems/"
        const final = db.concat(valueName)
        
        setcategory(valueName)

        axios.get(final).then((res)=>{

            setitem(res.data)
            // console.log(res.data)
        })


    }


    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <div className='container product-wrapper'>
                <div className='row'>
                    <Sidebar item={item} key={item.id} getCompany={getCompany} company={company} category={category} getCategory={getCategory} />
                    <ProductsDiv item={item} key={item.id} company={company} category={category} />
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default Products