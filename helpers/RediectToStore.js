import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.NEXT_PUBLIC_HOST || 'preps.dev'

export function rediect_to_store(domain, token) {
    const url = `http://${domain}.${host}/dashboard?token=${token}`
    return window.location = url
}
