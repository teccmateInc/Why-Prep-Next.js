import React from 'react'
import { useTranslation } from 'react-i18next'

const GetInfo = () => {
    const {t}=useTranslation("why")
  return (
    <div>
        <div className='getInfo-container'>
            <div className='offset-md-2 col-12 col-md-5'>
                <h4 className='getInfo-heading'>{t("fifthbanner.main")}</h4>
            </div>
            <div className='getInfo-search'>
            <div className='offset-md-2 col-md-5'>
                <input className='getInfo-input' type='text' placeholder={t("fifthbanner.input")}/>
            </div>
            <button className='getInfo-btn'>{t("fifthbanner.botton")}</button>
            </div>
        </div>
    </div>
  )
}

export default GetInfo