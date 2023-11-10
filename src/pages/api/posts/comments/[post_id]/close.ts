import jwtChecker, { RequestWithUserHeader } from "@/middlewares/jwtChecker";
import postModel, { IPost } from "@/models/post.model";
import dbConnect from "@/utils/dbConnect";
import validatePostId from "@/utils/validatePostId";
import { NextApiResponse } from "next";

async function handler(req: RequestWithUserHeader, res: NextApiResponse) {
  await dbConnect()
  let post_id = req.query.post_id as string;
  let result = validatePostId(post_id);

  if (!result.success) {
    return res.status(result.status).json(result);
  }

  let post: IPost | null = await postModel.findById(post_id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Cannot found post with `post_id` in request params",
    });
  }

  try {
    await postModel
      .findByIdAndUpdate(post_id, {
        comments_closed: true,
      })
      .then(() => {
        return res.status(200).json({
          success: true,
          message: "closed comments successfully",
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
}

export default jwtChecker(handler);
