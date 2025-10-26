// api/library.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://68fdb7037c700772bb11bd32.mockapi.io/dbjson/library"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
