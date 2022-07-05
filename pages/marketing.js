import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import MainBanner from '../components/marketing/MainBanner'
import StartTrial from '../components/marketing/StartTrial.js'
import SendEmail from '../components/marketing/SendEmail.js'
import Broadcast from '../components/marketing/Broadcast.js'
import TargetedGroup from '../components/marketing/TargetedGroup.js'
import AutomatedCompaign from '../components/marketing/AutomatedCompaign.js'
import Footer from '../components/Layouts/Footer'

const Marketing = () => {
  return (
    <div>
        <NavbarTwo />
        <MainBanner />
        <StartTrial />
        <SendEmail />
        <Broadcast />
        <TargetedGroup />
        <AutomatedCompaign />
        <Footer />
    </div>
  )
}

export default Marketing