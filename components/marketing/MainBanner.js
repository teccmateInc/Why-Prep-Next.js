import React from 'react'
import { useTranslation } from 'react-i18next'

const MainBanner = () => {
    const {t}=useTranslation("marketing");
  return (
    <div style={{backgroundColor:"#F6FAFD !important"}}>
        <div className='container ' >
            <div className='row justify-content-center bannerText'>
                <div className='col-md-5 align-items-center'>
                    <h3>
                        {t("firstbanner.main.a")}
                    </h3>
                    {/* <br></br> */}
                    <h3>
                    {t("firstbanner.main.b")}
                    </h3>
                    
                </div>
                <img src='/images/marketingBanner.PNG' width="600px" height="100%"/>
            </div>
        </div>
    </div>
  )
}

export default MainBanner