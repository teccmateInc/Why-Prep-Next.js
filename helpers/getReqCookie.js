export async function getReqCookie(cookies, value) {
    if (!cookies || !value) return ''
    if (!typeof cookies === 'object' || !typeof value === 'string') return ''

    const keys = Object.keys(cookies)
    let wanted_value;
    for (const key of keys) {
        if (key === value) {
            wanted_value = key
        }
    }

    if (!wanted_value) return ''

    return Promise.resolve(cookies[wanted_value])
}