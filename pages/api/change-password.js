import { Prep } from "../../apis/prep"
import { cookieConfig } from "../../helpers/cookieConfig"

export default async (req, res) => {

    let config = await cookieConfig(req)

    config = {
        headers: {
            ...config.headers,
            Authorization: req.body.token
        }
    }

    try {
        const body = req.body
        const { data } = await Prep.patch(`/api/auth/seller/repassword`, body, config)
        res.json(data)
    } catch (error) {
        res.status(400).json(error.response.data)
    }
}