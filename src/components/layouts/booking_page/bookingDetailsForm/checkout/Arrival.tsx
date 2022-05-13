import React from "react";
import ReactDatePicker from "react-datepicker";
import useBookingStore from "../../bookingStore";
import { ColumnGroup, Column } from "./styles";

const Arrival = () => {
  const arrival = useBookingStore(state => state.arrival);
  const handleArrival = useBookingStore(state => state.handleArrival);

  return (
    <>
      <ColumnGroup className="formInput">
        <Column className="pe-sm-2">
          <h6 className="sub-title-4">Arrival</h6>
          <ReactDatePicker
            className="calender"
            dateFormat="dd/MM/yyyy"
            selected={arrival}
            minDate={new Date()}
            onChange={handleArrival}
            required
          />
        </Column>
      </ColumnGroup>
    </>
  );
};

export default Arrival;
