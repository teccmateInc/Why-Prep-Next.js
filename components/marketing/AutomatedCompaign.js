import React from 'react'
import { useTranslation } from 'react-i18next'

const AutomatedCompaign = () => {
    const {t}=useTranslation("marketing")
  return (
    <div>
        <div style={{textAlign:"center",backgroundColor:"#F6FAFD"}}>
            <h3 ><strong>{t("sixthbanner.main")} </strong></h3>
            <p>{t("sixthbanner.sub")}</p>
            <img src='/images/laptop.PNG' width="100%"/>
        </div>
    </div>
  )
}

export default AutomatedCompaign