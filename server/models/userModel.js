import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: [true, "Email Already Taken"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minLength: [6, "Password Length Should be Greadter then 6 Character"],
    },
    address: {
      type: String,
      required: [true, "Address is Required"],
    },
    city: {
      type: String,
      required: [true, "City  Name is Required"],
    },
    country: {
      type: String,
      required: [true, "Country Name is Required"],
    },
    phone: {
      type: String,
      required: [true, "Phone No is Required"],
    },
    profilePic: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export const userMdoel = mongoose.model("Users", userSchema);
export default userMdoel;
