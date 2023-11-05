// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/user.model";
import { hashPassword } from "@/utils/bcryptUtils";

type Data = {
  success?: boolean;
  message?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return;

  const body = req.body;

  if (
    "username" in body === false ||
    "email" in body === false ||
    "password" in body === false
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter valid json" });
  }
  await dbConnect();

  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).json({
      success: false,
      message: `there is already user with ${req.body.email} email!`,
    });
  }

  user = new User({
    username: body.username,
    email: body.email,
    password: body.password,
  });

  let error = user.validateSync();

  if (error !== undefined) {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      error,
    });
  }

  user.password = hashPassword(user.password);
  try {
    await user.save().then(() =>
      res.status(201).json({
        success: true,
        message: "The user has been added successfully",
      })
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong when trying to add user to db",
    });
  }
}
