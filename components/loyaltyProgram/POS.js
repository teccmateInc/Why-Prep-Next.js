import React from 'react'
import { useTranslation } from 'react-i18next'

const POS = () => {
    const {t}=useTranslation("loyalty")
  return (
    <div>
        <div className='POS-upper-section'>
        <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 align-items-center text-center">
            <div style={{padding:"2vmax 0"}}>
                <h5><strong>{t("thirdbanner.main.a")} <br /> {t("thirdbanner.main.b")} </strong></h5>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className='POS-middle-section'>
            <img src="/images/POSbackground.jpeg" width="100%"/>
        
        </div>
        <div className='POS-lower-section'>
        <div className="container">
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-5'>
                    <img src="/images/salesComparision.jpeg" />
                </div>
                <div className='col-md-4'>
                    <h5><strong>{t("thirdbanner.sub.a")}<br /> {t("thirdbanner.sub.b")} </strong></h5>
                <p>{t("thirdbanner.body")}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default POS