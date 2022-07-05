import React from 'react'
import { useTranslation } from 'react-i18next'

const CustomerEngagement = () => {
    const {t}=useTranslation("loyalty")
  return (
    <div className='customer-engagement'>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-5 text-center'>
                    <h5><strong>{t("forthbanner.main")}</strong></h5>
                    <p>{t("forthbanner.body")}</p>
                </div>
                <div className='row justify-content-center align-items-center pt-3'>
                    <img src="/images/customers.jpeg"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CustomerEngagement