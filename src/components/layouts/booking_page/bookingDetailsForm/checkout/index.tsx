import React, { useState } from "react";
import { Wrapper, ColumnGroup, Column } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import Arrival from "./Arrival";
import Departure from "./Departure";
import Guests from "./Guests";
import Stay from "./Stay";

interface checkoutProps {
  handleBookNow: () => void;
}

const Checkout: React.FC<checkoutProps> = ({ handleBookNow }) => {
  return (
    <Wrapper>
      <div className="header">
        <h2 className="sub-title-1">Checkout</h2>
      </div>

      <div className="box">
        <div className="d-flex">
          <Arrival />
          <Departure />
        </div>
        <Guests />
        <Stay />

        <ColumnGroup className="totAmount">
          <Column className="d-flex justify-content-between">
            <h5 className="sub-title-2">Total Amount</h5>
            <h5 className="sub-title-2">100 Rs.</h5>
          </Column>
        </ColumnGroup>

        <div className="btnContainer">
          <button type="submit" onClick={handleBookNow}>
            BOOK NOW
          </button>
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
