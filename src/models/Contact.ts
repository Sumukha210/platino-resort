import mongoose, { Document, Model, model, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message?: string;
}

const ContactSchema: Schema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: String,
  },
  { timestamps: true }
);

export const Contact: Model<IContact> =
  mongoose.models.Contact || model("Contact", ContactSchema);
