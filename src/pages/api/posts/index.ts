import jwtChecker, { RequestWithUserHeader } from "@/middlewares/jwtChecker";
import postModel from "@/models/post.model";
import dbConnect from "@/utils/dbConnect";
import { NextApiResponse } from "next";

async function handler(_: RequestWithUserHeader, res: NextApiResponse) {
  await dbConnect();

  try {
    const posts = await postModel.find();
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
