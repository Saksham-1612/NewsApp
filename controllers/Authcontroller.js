import prisma from "../db/db.config.js";
import vine, { errors } from "@vinejs/vine";
import { registerSchema } from "../validations/AuthValidations.js";
import { encryptPassword } from "../utils/PasswordUtil.js";

class AuthController {
  static async register(req, res) {
    try {
      const body = req.body;
      const validator = vine.compile(registerSchema);
      const payload = await validator.validate(body);

      //encrypt password
      payload.password = encryptPassword(payload.password);

      return res.json({ payload });
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        console.log(error.messages);
        res.status(400).json({ error: error.messages });
      }
    }
  }
}

export default AuthController;
