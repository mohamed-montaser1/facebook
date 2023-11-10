import mongoose from "mongoose";

export default function validatePostId(post_id: string) {
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
