import db from "@/utils/dbConnection";
import getHandler from "@/API/handler";
import { Booking } from "@/models/BookingDetails";

export default getHandler
  .post(async (req, res) => {
    try {
      console.log(req.body);
      await db.connect();
      const booking = await Booking.create(req.body);
      await db.disconnect();

      res.json({ result: booking });
    } catch (error) {
      console.log("Error", error);
    }
  })
  .get(async (req, res) => {
    try {
      await db.connect();
      const bookings = await Booking.find().lean();
      await db.disconnect();

      const result = bookings.map(
        ({ bookingDetails: { arrival, departure } }) => ({
          start: arrival,
          end: departure,
        })
      );
      res.json({ result });
    } catch (error) {
      console.log("Error", error);
    }
  });
