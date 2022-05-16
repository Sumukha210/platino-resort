import React from "react";
import ReactDatePicker from "react-datepicker";
import { ColumnGroup, Column } from "./styles";
import add from "date-fns/add";
import useBookingStore from "../../bookingStore";
import { bookedDatesTypes } from ".";

interface departureProps {
  bookedDates: bookedDatesTypes | undefined;
}

const Departure: React.FC<departureProps> = ({ bookedDates }) => {
  const arrival = useBookingStore(state => state.arrival);
  const departure = useBookingStore(state => state.departure);
  const handleDeparture = useBookingStore(state => state.handleDeparture);

  return (
    <>
      <ColumnGroup className="formInput">
        <Column>
          <h6 className="sub-title-4">Departure</h6>
          <ReactDatePicker
            className="calender"
            dateFormat="dd/MM/yyyy"
            selected={departure}
            minDate={add(arrival || new Date(), { days: 1 })}
            onChange={handleDeparture}
            required
            excludeDateIntervals={bookedDates}
          />
        </Column>
        <hr />
      </ColumnGroup>
    </>
  );
};

export default Departure;
