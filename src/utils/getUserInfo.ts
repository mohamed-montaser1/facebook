import userModel from "@/models/user.model";

interface IUser {
  username: string;
  email: string;
  password: string;
}

export default async function getUserInfo(
  userId: string
): Promise<IUser | null> {
  let user: unknown = await userModel.findById(userId);

  console.log(user);

  return null;
}
