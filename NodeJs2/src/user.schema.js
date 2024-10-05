import mongoose from "mongoose";
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  country: String,
  city: String,
  street: String,
  houseNumber: String,
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    age: {
      type: Number,
      min: 1,
      max: 200,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
      required: [true, "Age is required"],
    },
    address: addressSchema,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    projects: [String],
  },
  {
    collation: "Users",
  }
);

export default mongoose.model("User", userSchema);
