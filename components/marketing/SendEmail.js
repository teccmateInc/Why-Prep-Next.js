import React from 'react'
import { useTranslation } from 'react-i18next'

const SendEmail = () => {
    const {t}=useTranslation("marketing")
  return (
    <div className='email-section'>
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-5 main-container'>
                <h3 style={{color:"white",textAlign:"center"}}>{t("thirdbanner.main")}</h3>
                <p className='mt-4 email-section-para'>{t("thirdbanner.body")}</p>
                <img src='/images/email.PNG' width="656px"/>
            </div>
        </div>
        </div>

    </div>
  )
}

export default SendEmail