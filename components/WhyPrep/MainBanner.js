import React from 'react'
import { useTranslation } from 'react-i18next'

const MainBanner = () => {
    const {t}=useTranslation("why")
  return (
      <div className='whyPrep-main'>
    <div className='whyPrep-banner'>
        <div>
            <h2 className='whyPrep-banner-heading'>{t("firstbanner.main")}</h2>
            <p className='whyPrep-banner-sub'>{t("firstbanner.sub")}</p>
        </div>
    </div>
    </div>
  )
}

export default MainBanner