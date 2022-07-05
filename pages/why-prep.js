import React from 'react'
import Footer from '../components/Layouts/Footer'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import MainBanner from "../components/WhyPrep/MainBanner.js"
import WithPrep from "../components/WhyPrep/WithPrep.js"
import StartUp from "../components/WhyPrep/StartUp.js"
import LetsStart from "../components/WhyPrep/LetsStart.js"
import GetInfo from "../components/WhyPrep/GetInfo.js"
const WhyPrep = () => {
  return (
    <div>
        <NavbarTwo />
        <MainBanner />
        <WithPrep />
        <StartUp />
        <LetsStart />
        <GetInfo />
        <Footer />
    </div>
  )
}

export default WhyPrep