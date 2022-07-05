import { Prep } from "../../apis/prep"
import { getReqCookie } from "../../helpers/getReqCookie"

export default async (req, res) => {

    // Set up header cookie
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
    // Set up header cookie

    try {
        const { data } = await Prep.post('/api/auth/seller/login', req.body, config)
        res.json(data)
    } catch (error) {
        res.status(400).json(error.response.data)
    }
}