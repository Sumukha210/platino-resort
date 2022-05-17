import React from "react";
import { ColumnGroup, Column } from "./styles";
import useBookingStore from "../../../../../store/bookingStore";

const Guests = () => {
  const guests = useBookingStore(state => state.guests);
  const handleGuests = useBookingStore(state => state.handleGuests);

  return (
    <>
      <ColumnGroup className="formInput">
        <Column>
          <h6 className="sub-title-4">Guests</h6>
          <select
            id="Guests"
            className="form-select"
            value={guests}
            onChange={handleGuests}>
            {[...Array(20).keys()].map(item => (
              <option className="sub-title-3" key={item} value={item + 1}>
                {item + 1}
              </option>
            ))}
          </select>
        </Column>
      </ColumnGroup>
    </>
  );
};

export default Guests;
