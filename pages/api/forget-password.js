import { Prep } from "../../apis/prep"
import { cookieConfig } from "../../helpers/cookieConfig"

export default async (req, res) => {

    const config = await cookieConfig(req)

    try {
        const body = {
            email: req.body.email
        }
        const { data } = await Prep.post(`/api/auth/seller/repassword`, body, config)
        res.json(data)
    } catch (error) {
        res.status(400).json(error.response.data)
    }
}