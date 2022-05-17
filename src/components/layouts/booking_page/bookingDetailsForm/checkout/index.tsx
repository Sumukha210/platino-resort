import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import Arrival from "./Arrival";
import Departure from "./Departure";
import Guests from "./Guests";
import Stay from "./Stay";
import axios from "axios";
import sub from "date-fns/sub";
import Amount from "./Amount";

export type bookedDatesTypes = {
  start: Date;
  end: Date;
}[];

const Checkout = () => {
  const [bookedDates, setBookedDates] = useState<bookedDatesTypes>();

  const getBookedDates = async () => {
    try {
      const res = await axios.get("/api/bookingDetails");
      setBookedDates(
        res.data.result.map((item: any) => ({
          start: sub(new Date(item.start), { days: 1 }),
          end: new Date(item.end),
        }))
      );
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    getBookedDates();
  }, []);

  return (
    <Wrapper>
      <div className="header">
        <h2 className="sub-title-1">Checkout</h2>
      </div>

      <div className="box">
        <div className="d-flex">
          <Arrival bookedDates={bookedDates} />
          <Departure bookedDates={bookedDates} />
        </div>

        <Guests />
        <Stay />
        <Amount />

        <div className="btnContainer">
          <button type="submit">BOOK NOW</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;

// if (arrival && departure) {
//   console.log(
//     `Arrival:- ${format(arrival, "dd/mm/yyyy")}, Departure:- ${format(
//       departure,
//       "dd/mm/yyyy"
//     )} `
//   );
// }
