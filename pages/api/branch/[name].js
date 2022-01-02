import { query } from '../../../lib/db/db'

const handler = async (req, res) => {
    const { name } = req.query

    try {

        if (!name) {
            return res.status(400).json({ message: '`branchname` required' })
        }
        const result = await query(`
            SELECT * FROM branchen_meta_data
            WHERE name = ?
        `,
            name
        )
        return res.status(200).json(result)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}

export default handler