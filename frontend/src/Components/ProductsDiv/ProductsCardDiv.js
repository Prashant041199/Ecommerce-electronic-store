import React from 'react'
import Card from '../Card/Card'
import './ProductsDiv.css'
import ListCard from '../ListCard/ListCard'

// import axios from "axios"
// import { useState,useEffect } from 'react'


const ProductsCardDiv = ({ viewType, item, company, sort, key }) => {


  if (viewType === "List") {
    
    if (sort === "asc") {
      return (
        <div className='products-cards-div'>
          {

            item.map((e) => {
              if (e.company === company) {
                return <ListCard e={e} s={e.id} />
              } else if (company === "All") {
                return <ListCard e={e} s={e.id} />
              }
            })

          }
        </div>
      )
    } else {
      return (
        <div className='products-cards-div'>
          {

            item.slice(0).reverse().map((e) => {
              if (e.company === company) {
                return <ListCard e={e} s={e.id} />
              } else if (company === "All") {
                return <ListCard e={e} s={e.id} />
              }
            })

          }
        </div>
      )
    }


    // return (<div className='products-cards-div'>
    //   {

    //     item.map((e) => { 
    //       if (e.company === company) {
    //         return <ListCard e={e} key={e.id} />
    //       } else if (company === "All") {
    //         return <ListCard e={e} key={e.id} />
    //       }
    //     })

    //   }
    // </div>)

  } else {


    if (sort === "asc") {
      return (
        <div className='products-cards-div'>
          {

            item.map((e) => {
              if (e.company === company) {
                return <Card e={e} s={e.id} />
              } else if (company === "All") {
                return <Card e={e} s={e.id} />
              }
            })

          }
        </div>
      )
    } else {
      return (
        <div className='products-cards-div'>
          {

            item.slice(0).reverse().map((e) => {
              if (e.company === company) {
                return <Card e={e} key={e.id} />
              } else if (company === "All") {
                return <Card e={e} key={e.id} />
              }
            })

          }
        </div>
      )
    }

    // return (<div className='products-cards-div'>
    //   {

    //     item.slice(0).reverse().map((e) => {

    //       if (e.company === company) {
    //         return <Card e={e} key={e.id} />
    //       }
    //       else if (company === "All") {
    //         return <Card e={e} key={e.id} />
    //       }
    //     })

    //   }
    // </div>)

  }

}

export default ProductsCardDiv;