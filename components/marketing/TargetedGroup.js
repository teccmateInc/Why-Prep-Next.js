import React from 'react'
import { useTranslation } from 'react-i18next'

const TargetedGroup = () => {
    const {t}=useTranslation("marketing")
  return (
    <div style={{backgroundColor:"#F6FAFD" ,padding:"5vmax 0"}}>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-12 col-md-4'>
                <h5 ><strong>{t("fifthbanner.main.a")}<br />{t("fifthbanner.main.b")}</strong></h5>
                <p>{t("fifthbanner.body")}</p>
                </div>
                <div className='col-12 col-md-5 justify-content-center'>
                    <img src='/images/flow.PNG' width="100%"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TargetedGroup