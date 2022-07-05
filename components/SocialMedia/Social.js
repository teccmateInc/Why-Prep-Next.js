import React from 'react'
import { useTranslation } from 'react-i18next'

const Social = () => {
    const {t}=useTranslation("social-media")
  return (
    <div className='social-container'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className="col-12">
                    <h4 style={{textAlign:"center"}}>{t("sixthbanner.main")}</h4>
                    
                </div>
                <div className='d-flex justify-content-center'>
                <img style={{padding:"3vmax 0"}} src='/images/all-media.PNG'/>
                </div>
                <p style={{textAlign:"center",textDecoration:"underline"}}>{t("sixthbanner.sub")}</p>
            </div>
        </div>
    </div>
  )
}

export default Social