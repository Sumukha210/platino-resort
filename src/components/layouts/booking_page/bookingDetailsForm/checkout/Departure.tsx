import React from "react";
import ReactDatePicker from "react-datepicker";
import { ColumnGroup, Column } from "./styles";
import add from "date-fns/add";
import useBookingStore from "../../bookingStore";

const Departure = ({}) => {
  const arrival = useBookingStore(state => state.arrival);
  const departure = useBookingStore(state => state.departure);
  const handleDeparture = useBookingStore(state => state.handleDeparture);

  return (
    <>
      <ColumnGroup className="formInput">
        <Column className="ps-sm-2">
          <h6 className="sub-title-4">Departure</h6>
          <ReactDatePicker
            className="calender"
            dateFormat="dd/MM/yyyy"
            selected={departure}
            minDate={add(arrival || new Date(), { days: 1 })}
            onChange={handleDeparture}
            required
          />
        </Column>
        <hr />
      </ColumnGroup>
    </>
  );
};

export default Departure;
