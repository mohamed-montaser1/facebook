import jwtChecker, { RequestWithUserHeader } from "@/middlewares/jwtChecker";
import postModel from "@/models/post.model";
import dbConnect from "@/utils/dbConnect";
import { NextApiResponse } from "next";

async function handler(req: RequestWithUserHeader, res: NextApiResponse) {
  await dbConnect();
  let page = Math.floor(Number(req.query.page)) || 1;
  let skip: number = page === 1 ? 0 : page * 3 - 3;

  try {
    const posts = await postModel
      .find()
      .skip(skip)
      .limit(page * 3);
    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
}

export default jwtChecker(handler);
