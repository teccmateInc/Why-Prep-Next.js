import { Prep } from '../../apis/prep'

export default async (req, res) => {
    try {
        const { data } = await Prep.post(`/api/v1/domain/available`, req.body)
        res.json(data)
    } catch (error) {
        res.status(400).json(error.response.data)
    }
}