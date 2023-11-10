import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  body: {
    text: String,
    image: String,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments_closed: {
    type: Boolean,
    default: false,
  },
  comments: {
    type: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        comment: {
          type: String,
          required: [true, "you should enter comment content"],
        },
        likesCount: {
          type: Number,
          default: 0,
        },
      },
    ],
    default: undefined,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export interface IPost {
  _id: string;
  author: string;
  body: {
    text: string;
    image: string;
  };
  likesCount: number;
  likes: string[];
  createdAt: Date;
  comments_closed: boolean;
  comments: {
    user: string;
    comment: string;
    likesCount: number;
  }[];
}

export default models.Post || model("Post", postSchema);
