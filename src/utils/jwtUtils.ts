import jwt from "jsonwebtoken";

export function jwtSign(payload: string | object | Buffer) {
  return jwt.sign(payload, process.env.JWT_SECRET as string);
}

export function jwtVerify(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET as string);
}
