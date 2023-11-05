import bcrypt from "bcrypt";

export function hashPassword(password: string) {
  let saltRounds = 10;
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(password, salt);

  return hash;
}

export function comparePassword(hashedPassword: string, plainPassword: string) {
  return bcrypt.compare(plainPassword, hashedPassword);
}
