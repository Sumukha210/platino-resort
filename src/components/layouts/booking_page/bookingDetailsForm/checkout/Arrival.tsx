import React, { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import useBookingStore from "../../bookingStore";
import { ColumnGroup, Column } from "./styles";
import { bookedDatesTypes } from ".";
import add from "date-fns/add";
import isAfter from "date-fns/isAfter";

interface arrivalProps {
  bookedDates: bookedDatesTypes | undefined;
}

const Arrival: React.FC<arrivalProps> = ({ bookedDates }) => {
  const arrival = useBookingStore(state => state.arrival);
  const handleArrival = useBookingStore(state => state.handleArrival);

  const res =
    arrival &&
    bookedDates?.filter(
      ({ start, end }) =>
        isAfter(arrival, add(start, { days: 1 })) || isAfter(arrival, end)
    );

  useEffect(() => {
    res?.length && handleArrival(add(res[0].end, { days: 1 }));
  }, [res?.length]);

  return (
    <>
      <ColumnGroup className="formInput">
        <Column>
          <h6 className="sub-title-4">Arrival</h6>
          <ReactDatePicker
            className="calender"
            dateFormat="dd/MM/yyyy"
            excludeDateIntervals={bookedDates}
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
