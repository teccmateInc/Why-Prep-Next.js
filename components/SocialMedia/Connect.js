import React from 'react'
import { useTranslation } from 'react-i18next'

const Connect = () => {
    const {t}=useTranslation("social-media")
  return (
    <div className='connect-container'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className="col-12">
                    <h4 style={{textAlign:"center",padding:"3vmax 0"}}><strong>{t("fifthbanner.main")}</strong></h4>
                    
                </div>
                <div className='d-flex justify-content-center'>
                <img src='/images/store.PNG'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect