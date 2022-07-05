import React, { Component } from 'react'
import Navbar from '../components/Layouts/NavbarTwo'
import MainBanner from '../components/AllOnlineSolution/MainBanner'
import Footer from '../components/Layouts/Footer'

class ALl_Online_Solution extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <Footer />
            </React.Fragment>
        )
    }
}

export default ALl_Online_Solution