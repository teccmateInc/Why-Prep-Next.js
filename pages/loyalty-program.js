import React from 'react'
import Footer from '../components/Layouts/Footer'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import MainBanner from '../components/loyaltyProgram/MainBanner'
import PunchCard from '../components/loyaltyProgram/PunchCard.js'
import Pricing from '../components/loyaltyProgram/Pricing.js'
import Prices from '../components/loyaltyProgram/Prices.js'
import POS from '../components/loyaltyProgram/POS.js'
import CustomerEngagement from '../components/loyaltyProgram/CustomerEngagement.js'
import Contact from '../components/loyaltyProgram/Contact'


const loyaltyProgram = () => {
  return (
    <div>
        <NavbarTwo />
        <MainBanner />
        <PunchCard />
        <POS />
        <CustomerEngagement />
        <Pricing />
        <Prices />
        <Contact />
        <Footer />
    </div>
  )
}

export default loyaltyProgram