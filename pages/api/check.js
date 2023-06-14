// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import Buffer from 'Buffer'

export default function handler(req, res) {
  axios
    .get(`https://api.sandbox.midtrans.com/v2/${req.query.id}/status`, {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from("SB-Mid-server-_CsVCXqJlEaq0LjvFdkZrbgy").toString(
            "base64"
          ),
      },
    })
    .then((response) => res.status(200).json(response.data));
}
