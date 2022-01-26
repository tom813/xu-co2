import { query } from '../../../lib/db/db'

const handler = async (req, res) => {
    try {
        const result = await query(`
            SELECT * FROM state_subsets
        `)

        return res.status(200).json(result)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler