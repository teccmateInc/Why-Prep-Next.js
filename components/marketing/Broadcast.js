import React from 'react'
import { useTranslation } from 'react-i18next'

const Broadcast = () => {
    const {t}=useTranslation("marketing")
  return (
    <div className='broadcast-section'>
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-5 main-container'>
               
                <img src='/images/mobiles.PNG' width="656px"/>
                <div style={{padding:"5vmax 0"}}>
                <h4 style={{textAlign:"center"}}><strong>{t("forthbanner.main")}</strong></h4>
                <p style={{font: "300 1.1vmax poppins",textAlign:"center"}} className='mt-4'>{t("forthbanner.body")}</p>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Broadcast