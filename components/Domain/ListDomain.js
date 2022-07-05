import React, { useState } from 'react'

const ListDomain = ({ suggest_name: suggest_name_list }) => {

    if (!suggest_name_list) {
        return ''
    }

    const suggest_name = suggest_name_list[0]

    // console.log(suggest_name);
    const suggesnt_domain_list = Object.keys(suggest_name)

    let List = suggesnt_domain_list.map((domain_name, index) => (
        <tr key={index}>
            <td>{domain_name}</td>
            <td><i className="flaticon-check-mark"></i></td>
            <td><i className="flaticon-check-mark"></i></td>
            <td><i className="flaticon-check-mark"></i></td>
        </tr>
    ))

    return (
        <section className="comparisons-area ptb-70">
            <div className="container">
                <div className="section-title">
                    <h2>More Domain For Your Store</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="comparisons-table table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Packages</th>
                                <th scope="col">Freelancer</th>
                                <th scope="col">Householder</th>
                                <th scope="col">Business Man</th>
                            </tr>
                        </thead>

                        <tbody>
                            {List}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ListDomain