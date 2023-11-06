import jwtChecker, { RequestWithUserHeader } from "@/middlewares/jwtChecker";
import { NextApiResponse } from "next";

async function handler(req: RequestWithUserHeader, res: NextApiResponse) {
  let model = {
    user: req.user.sub as string,
    comment: req.body.comment,
    likesCount: 0,
  };

  return;
}

export default jwtChecker(handler);
