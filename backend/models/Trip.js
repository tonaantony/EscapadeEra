import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  location: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  description: { type: String, required: true },
  participants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      userName: { type: String, required: true },
      fullName: { type: String },
      email: { type: String, required: true },
    },
  ],
});

export default mongoose.model("Trip", tripSchema);
