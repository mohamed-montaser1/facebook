import { Schema, model, models } from "mongoose";

const likeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  createdAt: { type: Date, default: Date.now },
});

export default models.Like || model("Like", likeSchema);
