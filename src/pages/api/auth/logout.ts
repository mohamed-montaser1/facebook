import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("jwt_token", "", { maxAge: -1, path: "/" })
  );
  return res.status(200).json({ success: true, message: "Signed out" });
}

export default handler;
