import { query } from "../../lib/db/db";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const result = await query(`
            INSERT INTO newsletter
            VALUES(null, "${JSON.parse(req.body).email}");
        `);

      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  } else {
    return res.status(500).json({ message: "Method is != POST" });
  }
};

export default handler;
