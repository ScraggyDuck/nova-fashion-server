import * as bcrypt from "bcrypt";
import * as mongoose from "mongoose";

export enum Gender {
  MALE = "male",
  FEMALE = "female"
}

export const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    select: false
  },
  gender: {
    type: Gender
  },
  birthdate: String,
  firstName: String,
  lastName: String,
  email: String,
  created: { type: Date, default: Date.now }
});

UserSchema.pre("save", async function(next: mongoose.HookNextFunction) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const passwordHashed = await bcrypt.hash(this["password"], 10);
    this["password"] = passwordHashed;
    return next();
  } catch (err) {
    return next(err);
  }
});
