import mongoose, { Document, Model, model, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message?: string;
}

const ContactSchema: Schema = new Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);

export const Contact: Model<IContact> =
  mongoose.models.Contact || model("Contact", ContactSchema);
