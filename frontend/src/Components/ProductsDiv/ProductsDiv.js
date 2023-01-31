import './ProductsDiv.css'
import ProductsCardDiv from './ProductsCardDiv'
import { useState, useEffect } from 'react'
import React from 'react'

const ProductsDiv = ({ item, company, category, key }) => {


    const [sort, setsort] = useState("asc")

    const getSort = (a) =>{
        if(a.target.value==="des"){
            setsort("des")
        }else{
            setsort("asc") 
        }
    
        console.log(sort)
    } 


    const [viewType, setviewType] = useState("Large")

    const run = (value) => {
        setviewType(value)
    }

    return (
        <div className='col-md-9 col-sm-12'>
            <div className='product-container'>
                <div className='sort-products'>
                    <div className='view-type'>
                        <div className='large'>
                            <button type='button' className='large-button' onClick={() => run("Large")}><img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/18/null/external-all-borders-worksheet-highlight-cell-section-button-table-filled-tal-revivo.png" /></button>
                        </div>
                        <div className='list'>
                            <button type='button' className='list-button' onClick={() => run("List")}><img src="https://img.icons8.com/ios-glyphs/23/null/bulleted-list.png" /></button>
                        </div>
                    </div>

                    <div className='products'>
                        <p>{item.length} total products.</p>
                    </div>
                    <div className='sort'>
                        <select className="form-select sort-option" onChange={getSort} aria-label="Default select example">
                            <option className='option' value="asc" >Price(Lowest)</option>
                            <option className='option' value="des" >Price(Highest)</option>
                        </select>
                    </div>
                </div>
                <div className='products-cards'>
                    <ProductsCardDiv viewType={viewType} item={item} key={key} company={company} category={category} sort={sort} />
                </div>
            </div>

        </div>
    )
}

export default ProductsDiv