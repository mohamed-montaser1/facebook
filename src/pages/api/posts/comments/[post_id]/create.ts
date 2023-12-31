import jwtChecker, { RequestWithUserHeader } from "@/middlewares/jwtChecker";
import postModel, { IPost } from "@/models/post.model";
import validatePostId from "@/utils/validatePostId";
import { NextApiResponse } from "next";

async function handler(req: RequestWithUserHeader, res: NextApiResponse) {
  let model = {
    user: req.user.sub as string,
    comment: req.body.comment,
    likesCount: 0,
  };

  const post_id = req.query.post_id as string;

  let result = validatePostId(post_id);

  if (!result.success) {
    return res.status(result.status).json(result);
  }
  let post: IPost | null = await postModel.findById(post_id);
  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Cannot found post with `post_id`",
    });
  }

  if (post.comments_closed) {
    return res.json({
      success: false,
      message: "Unable to provide comments on this post as the author has closed the comment section."
    })
  }

  try {
    await postModel
      .findByIdAndUpdate(post_id, {
        $push: { comments: model },
      })
      .then(() => {
        return res.json({
          success: true,
          message: "comment with added successfully",
        });
      });
  } catch (error) {
    return res.json(error);
  }
}

export default jwtChecker(handler);
