import './Features.css'

import React from 'react'

const Features = () => {
    return (
        <div>
            <div className='container'> 
                <div className='features-wrapper-flex'>
                    <div className='one'>
                        <div className='circle'>
                            <img src="https://img.icons8.com/fluency/48/null/deliver-food.png" />
                        </div>
                        <h5 className="heading-h5">Super Fast Delivery</h5>
                    </div>

                    <div className='two'>

                        <div className='four'>
                            <div className='circle'>
                                <img src="https://img.icons8.com/fluency/48/null/security-checked.png" />
                            </div>
                            <h5 className="heading-h5">Non-contact Shipping</h5>
                        </div>

                        <div className='four'>
                            <div className='circle'>
                                <img src="https://img.icons8.com/fluency/48/null/money-yours.png" />
                            </div>
                            <h5 className="heading-h5">Money Back Gurantee</h5>
                        </div>

                    </div>

                    <div className='three'>
                        <div className='circle'>
                            <img src="https://img.icons8.com/fluency/48/null/check-lock.png" />
                        </div>
                        <h5 className="heading-h5">Super secure payment system</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features