import React from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const ButtonFacebook = ({ value }) => {
    const facebookAuth = () => {
        const HOST = publicRuntimeConfig.NEXT_PUBLIC_HOST || 'preps.dev'
        const url = `https://api.${HOST}/api/auth/seller/facebook`
        return window.location = url
    }
    return (
        <button onClick={facebookAuth} type="button" className="facebook">
            <i className="fab fa-facebook-square"></i> {value}
        </button>
    )
}

export default ButtonFacebook