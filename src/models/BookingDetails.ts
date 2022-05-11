import mongoose, { Document, Model, model, Schema } from "mongoose";

export type IUserDetails = {
  name: string;
  email: string;
  city: string;
  street: string;
  postcode: string;
  telephone: number;
  country: string;
  message?: string;
};

export interface IBooking extends Document {
  userDetails: IUserDetails;

  bookingDetails: {
    arrival: Date;
    departure: Date;
  };
}

const BookingSchema: Schema = new Schema<IBooking>(
  {
    userDetails: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      city: { type: String, required: true },
      street: { type: String, required: true },
      postcode: { type: String, required: true },
      telephone: { type: Number, required: true },
      country: { type: String, required: true },
      message: { type: String },
    },
    bookingDetails: {
      arrival: Date,
      departure: Date,
    },
  },
  { timestamps: true }
);

export const Booking: Model<IBooking> =
  mongoose.models.Booking || model("Booking", BookingSchema);
