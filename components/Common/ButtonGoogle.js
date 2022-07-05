import React from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const ButtonGoogle = ({ value }) => {
    const googleAuth = () => {
        const HOST = publicRuntimeConfig.NEXT_PUBLIC_HOST || 'preps.dev'
        const url = `https://api.${HOST}/api/auth/seller/google`
        return window.location = url
    }
    return (
        <button onClick={googleAuth} type="button" className="google">
            <i className="fab fa-google"></i> {value}
        </button>
    )
}

export default ButtonGoogle