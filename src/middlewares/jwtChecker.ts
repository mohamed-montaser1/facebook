import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { jwtVerify } from "@/utils/jwtUtils";
import { JwtPayload } from "jsonwebtoken";

export type Ihandler = (
  req: NextApiRequest | RequestWithUserHeader | any,
  res: NextApiResponse
) => any;

export type RequestWithUserHeader = NextApiRequest & {
  user: string | JwtPayload;
};

const badRequestHeaderResponse = {
  success: false,
  message: "You must login first",
};

export default (handler: Ihandler) =>
  (req: RequestWithUserHeader, res: NextApiResponse) => {
    if (!req.headers.cookie) return res.json(badRequestHeaderResponse);
    let cookies = cookie.parse(req.headers.cookie as string); // object: keys = cookie-name
    let jwt_cookie = cookies.jwt_token.trim();
    if (!jwt_cookie) {
      return res.status(403).json(badRequestHeaderResponse);
    }

    let user = jwtVerify(jwt_cookie);

    req.user = user;

    handler(req, res);
  };
