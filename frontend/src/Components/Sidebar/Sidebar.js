import './Sidebar.css'

import React, { useState } from 'react'

const Sidebar = ({item,getCompany,company,category,getCategory,key}) => {


    // for getting unique companies in dropdown

    let companyArray = [];

    item.map((e)=>{
        companyArray.push(e.company)
    })

    let unique = new Set(companyArray)

    let uniqueItem = Array.from(unique);

    
    // for getting value of company

    const getC=(a)=>{
        
        getCompany(a.target.value)

    }

    // for getting value of category

    const getCat=(a)=>{
      
        getCategory(a.target.value)
    }



    return (
            <div className='col-md-2'>
                <div className='sidebar-container'>
                    <div className='search'>
                        
                    </div>
                    <div className='category'>
                        <h3>Category</h3>
                        <ul>
                            <li><button onClick={getCat} value="">All</button></li>
                            <li><button onClick={getCat} value="mobile">Mobile</button></li>
                            <li><button onClick={getCat} value="laptop">Laptop</button></li>
                            <li><button onClick={getCat} value="computer">Computer</button></li>
                            <li><button onClick={getCat} value="accessories">Accessories</button></li>
                            <li><button onClick={getCat} value="watch">Watch</button></li>
                        </ul>
                    </div>
                    <div className='company'>
                        <h3>Company</h3>
                        <select onChange={getC} value={company} className="form-select company-select" aria-label="Default select example" id='company-select'>
                            <option className='option' defaultValue="All">All</option>
                            {
                                uniqueItem.map((e)=>{
                                    return <option className='option' value={e}>{e}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar
