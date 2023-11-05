import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required!"],
    minlength: 10,
    maxlength: 20,
  },
  email: {
    type: String,
    minlength: [6, "Your email is too short"],
    validate: {
      validator: function (v: string) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid email`,
      required: true,
    },
  },
  password: {
    type: String,
    minlength: [8, "Your password is too weak!"],
    validate: {
      validator: function (v: string) {
        return /[a-z]/gi.test(v) && /[0-9]/g.test(v);
      },
      message: (props: { value: string }) =>
        `${props.value} is too weak password!`,
      required: true,
    },
  },
});

export default models.User || model("User", userSchema);
