import jwtChecker, { RequestWithUserHeader } from "@/middlewares/jwtChecker";
import postModel, { IPost } from "@/models/post.model";
import dbConnect from "@/utils/dbConnect";
import mongoose from "mongoose";
import { NextApiResponse } from "next";

async function handler(req: RequestWithUserHeader, res: NextApiResponse) {
  await dbConnect();
  if (req.method === "POST") {
    await handleLike(req, res);
  } else if (req.method === "DELETE") {
    await handleDislike(req, res);
  }
}

async function handleLike(req: RequestWithUserHeader, res: NextApiResponse) {
  await handleLikeOrDislike(req, res, true);
}

async function handleDislike(req: RequestWithUserHeader, res: NextApiResponse) {
  await handleLikeOrDislike(req, res, false);
}

async function handleLikeOrDislike(
  req: RequestWithUserHeader,
  res: NextApiResponse,
  isLike: boolean
) {
  const post_id = req.query.post_id as string;
  let result = validatePostId(post_id);

  if (!result.success) {
    return res.status(result.status).json(result);
  }

  const post: IPost | null = await postModel.findById(post_id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: `There is no post with the ${post_id} id!`,
    });
  }

  const isUserLiked = post.likes.includes(req.user.sub as string);

  if ((isLike && isUserLiked) || (!isLike && !isUserLiked)) {
    return res.json({
      success: false,
      message: `This user ${
        isLike ? "already liked" : "hasn't liked"
      } this post`,
    });
  }

  const update = isLike
    ? { $push: { likes: req.user.sub as string }, $inc: { likesCount: 1 } }
    : { $pull: { likes: req.user.sub as string }, $inc: { likesCount: -1 } };

  try {
    await postModel.findByIdAndUpdate(post_id, update);
    res.status(201).json({
      success: true,
      message: isLike ? "Added like successfully" : "Disliked successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while trying to ${
        isLike ? "increment likes" : "decrement likes"
      } and ${
        isLike ? "push new like" : "pull user's like"
      } from the post's likes array`,
    });
  }
}

function validatePostId(post_id: string) {
  if (!post_id) {
    return {
      status: 400,
      success: false,
      message: "You must add `post_id` in request url's params",
    };
  }

  if (!mongoose.isValidObjectId(post_id)) {
    return {
      status: 400,
      success: false,
      message: "Please enter a valid `post_id`",
    };
  }

  return { success: true, status: 200 };
}

export default jwtChecker(handler);
