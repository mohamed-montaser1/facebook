import { connect } from "mongoose";

export default async function dbConnect() {
  return await connect(process.env.DB_URL as string);
}
