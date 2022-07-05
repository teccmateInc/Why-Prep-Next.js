import { Prep } from "../../apis/prep"

export default async (req, res) => {
    try {
        const { id, token, domain } = req.body
        const body = {
            domain,
        }
        await Prep.patch(`/api/auth/seller/third/store/${id}`, body, { headers: { 'Authorization': token } })
        const { data } = await Prep.get(`/api/auth/seller/changetoken`, { headers: { 'Authorization': token } })
        res.json(data)
    } catch (error) {
        res.status(400).json(error.response.data)
    }
}