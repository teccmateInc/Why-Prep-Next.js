import React, { useState } from 'react'
import classnames from 'classnames'
import { isEmpty } from '../../validation/is_empty';

const Pricing = ({ domain_data }) => {

    if (isEmpty(domain_data)) {
        return ''
    }

    const { domain, price, isAvailable } = domain_data

    return (
        <div className="col-lg-12">
            <div className={classnames("single-pricing-box", { "single-pricing-box active": isAvailable === true })}>
                <div className="pricing-header">
                    {isAvailable ? <h3>Congrat! Your Domain is Available</h3> : <h3>Sorry! Your Domain is Not Available</h3>}
                    <p>{domain}</p>
                </div>

                {
                    isAvailable ?
                        <div className="price">
                            <div className="row">
                                <div className="col-6">
                                    <span className="symbol">฿</span> {price} <span>/ year</span>
                                </div>
                                <div className="col-6">
                                    <a className="btn btn-primary">Buy Now!</a>
                                </div>
                            </div>
                        </div>
                        : ''
                }


                {/* <ul className="pricing-features">
                    <li>
                        100 outgoing transfers/mo
                                        <i className="fas fa-check"></i>
                    </li>
                    <li>
                        5 Luvion Users
                                        <i className="fas fa-check"></i>
                    </li>
                    <li>
                        2 Business Mastercards
                                        <i className="fas fa-check"></i>
                    </li>
                    <li>
                        Premium Support
                                        <i className="fas fa-check"></i>
                    </li>
                    <li>
                        International payments
                                        <i className="fas fa-check"></i>
                    </li>
                    <li>
                        Accounting integrations
                                        <i className="fas fa-check"></i>
                    </li>
                </ul> */}

                {/* <div className="buy-btn">
                    <a className="btn btn-primary">Choose this plan</a>
                </div> */}
            </div>
        </div >

    )
}

export default Pricing