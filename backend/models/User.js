import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    // aadhar: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    address: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "user",
    },
    joinedTrips: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
