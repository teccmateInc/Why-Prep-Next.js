import React from 'react'
import { useTranslation } from 'react-i18next'

const PunchCard = () => {
    const {t}=useTranslation("loyalty")
  return (
    <div className='punch-card-experience'>
        <div className='container'>
        <div className='row justify-content-center align-items-center'>
            <div className='col-5 col-md-2 '>
                <img src="/images/stars.PNG" />

                </div>
                    </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col col-md-5 ' style={{padding:"2.3vmax 0",textAlign:"center"}}>
                    
                    <h5><strong>{t("secondbanner.main")}</strong></h5>
                </div>
                <div className='row justify-content-center align-items-center'>
                <div className='col col-md-5 ' style={{textAlign:"center"}}>
                    <p>{t("secondbanner.body")}</p>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default PunchCard