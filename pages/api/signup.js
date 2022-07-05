import { Prep } from "../../apis/prep"
import { cookieConfig } from "../../helpers/cookieConfig";

export default async (req, res) => {
    try {
        const headers = await cookieConfig(req)
        const { data } = await Prep.post('/api/auth/seller/register', req.body, headers)
        res.json(data);
    } catch (error) {
        res.status(400).json(error.response.data)
    }
}