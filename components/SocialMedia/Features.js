import React from 'react'
import { useTranslation } from 'react-i18next'

const Features = () => {
    const { t } = useTranslation("social-media")
    return (
        <div className='connect-customer'>
            <div className="container">
                <div className="row justify-content-center bd-highlight">
                    <div className="col-lg-4 col-12 text-center">
                        <img style={{ height: "60px", weight: "50px" }} src='/images/reach-customer.PNG' />
                        <h5 className='py-3'>{t("seventhbanner.a.main")}</h5>
                        <p className='py-3'>{t("seventhbanner.a.sub")}</p>
                    </div>
                    <div className="col-lg-4 col-12 text-center">
                        <img style={{ height: "60px", weight: "50px" }} src='/images/sync.PNG' />
                        <h5 className='py-3'>{t("seventhbanner.b.main")}</h5>
                        <p className='py-3'>{t("seventhbanner.b.sub")}</p>
                    </div>
                    <div className="col-lg-4 col-12 text-center">
                        <img style={{ height: "60px", weight: "50px" }} src='/images/compaigns.PNG' />
                        <h5 className='py-3'>{t("seventhbanner.c.main")}</h5>
                        <p className='py-3'>{t("seventhbanner.c.sub")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features