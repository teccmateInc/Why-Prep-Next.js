import { getReqCookie } from "./getReqCookie"


// Set up header cookie
export async function cookieConfig(req) {
    let Cookie
    const cookies = req.cookies
    if (!cookies) Cookie = 'lang=en'
    const lang = await getReqCookie(cookies, 'lang')
    Cookie = `lang=${lang ? lang : 'en'}`
    const config = {
        headers: {
            Cookie
        }
    }

    return config
}