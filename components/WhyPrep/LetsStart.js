import React from 'react'
import { useTranslation } from 'react-i18next'

const LetsStart = () => {
    const {t}=useTranslation("why")
  return (
    <div>
        <div className='letsStart-container'>
            <div className='col-md-5'>
                <h3 className='letsStart-heading'>{t("forthbanner.main")}</h3>
            </div>
        </div>
    </div>
  )
}

export default LetsStart