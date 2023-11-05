import dbConnect from "@/utils/dbConnect";
import User from "@/models/user.model";
import { NextApiRequest, NextApiResponse } from "next";
import { comparePassword } from "@/utils/bcryptUtils";
import { jwtSign } from "@/utils/jwtUtils";
import cookie from "cookie";

type Data = {
  success?: boolean;
  message?: string;
  error?: any;
  // [key: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return;

  const body = req.body;

  if ("email" in body === false || "password" in body === false) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter valid json" });
  }
  await dbConnect();

  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: `there is no user with ${req.body.email} email!`,
    });
  }

  let correctPass: boolean = await comparePassword(
    user.password,
    body.password
  );

  if (!correctPass) {
    return res.status(400).json({
      success: false,
      message: "Not correct password",
    });
  }

  let token = jwtSign({ sub: user._id, email: user.email });

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("jwt_token", token, {
      maxAge: 30 * 60 * 60 * 24,
      path: "/",
    })
  );

  return res.status(200).json({
    success: true,
    message: "Signed in successfully!",
  });
}
