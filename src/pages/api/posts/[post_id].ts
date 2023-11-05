import jwtChecker, { RequestWithUserHeader } from "@/middlewares/jwtChecker";
import postModel from "@/models/post.model";
import dbConnect from "@/utils/dbConnect";
import mongoose from "mongoose";
import { NextApiResponse } from "next";

async function handler(req: RequestWithUserHeader, res: NextApiResponse) {
  await dbConnect();
  const post_id = req.query.post_id;

  if (!post_id) {
    return res.status(400).json({
      success: false,
      message: "You must add `post_id` in request url's params",
    });
  }

  if (!mongoose.isValidObjectId(post_id)) {
    return res.status(400).json({
      success: false,
      message: "You must add a valid `post_id`",
    });
  }

  try {
    const post = await postModel.findById(post_id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: `No post found with id ${post_id}`,
      });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
}

export default jwtChecker(handler);
