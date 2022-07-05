import React from 'react'
import { useTranslation } from 'react-i18next'

const StartTrial = () => {
    const {t}=useTranslation("marketing")
  return (
      <div style={{backgroundColor:"#F6FAFD"}}>
      <div className='container' >

    <div className='trial-section'>
        {/* <div style> */}
            <button className='trial-btn'>{t("secondbanner.botton")}</button>
            <p>{t("secondbanner.body")}</p>
        </div>
    </div>
    </div>
  )
}

export default StartTrial