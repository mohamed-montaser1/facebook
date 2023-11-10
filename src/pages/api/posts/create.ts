import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import jwtChecker, { RequestWithUserHeader } from "@/middlewares/jwtChecker";
import postModel from "@/models/post.model";
import dbConnect from "@/utils/dbConnect";

interface IRequestBody {
  text: string;
  image: string;
}
interface IComment {
  user: string;
  comment: string;
  likesCount: number;
}

interface IModel {
  author: string;
  body: {
    text?: string;
    image?: string;
  };
  comments_closed?: boolean;
  comments: IComment[];
}

async function handler(req: RequestWithUserHeader, res: NextApiResponse) {
  await dbConnect();
  let author_id = req.user.sub as string;
  let body: IRequestBody = { text: req.body.text, image: req.body.image };

  let model: IModel = {
    author: author_id,
    body: {},
    comments_closed: false,
    comments: [],
  };

  if (!body.text && !body.image) {
    return res.status(400).json({
      success: false,
      message: "You should enter text or image",
    });
  }

  if (body.text) model.body["text"] = body.text;
  if (body.image) model.body["image"] = body.image;
  let post = new postModel(model);

  try {
    await post.save().then(() => {
      return res.status(201).json({
        success: true,
        message: "The post was created successfully!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error happened when server try to save the post in db",
    });
  }
}

export default jwtChecker(handler);
