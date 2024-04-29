import bcrypt from "bcryptjs";

export const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedpassword = bcrypt.hashSync(password, salt);
  return hashedpassword;
};
