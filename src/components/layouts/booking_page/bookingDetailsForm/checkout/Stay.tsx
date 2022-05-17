import React from "react";
import differenceInDays from "date-fns/differenceInDays";
import useBookingStore from "../../../../../store/bookingStore";
import { ColumnGroup, Column } from "./styles";
import usePricingStore from "@/store/pricingStore";
import { calculateTotalAmount } from "@/utils/calculateTotalAmount";

const Stay = () => {
  const arrival = useBookingStore(s => s.arrival);
  const departure = useBookingStore(s => s.departure);
  const totalNights =
    arrival && departure && differenceInDays(departure, arrival);

  const guests = useBookingStore(s => s.guests);
  const pricing = usePricingStore(s => s.pricing);

  const { stayAmountPerNight } = calculateTotalAmount(
    arrival,
    departure,
    guests,
    pricing
  );

  return (
    <>
      <ColumnGroup>
        <Column>
          <h6 className="sub-title-4">Stay</h6>
          <div className="d-flex justify-content-between mt-2">
            <h5 className="sub-title-4">{totalNights} Nights</h5>
            <h6 className="sub-title-4">Rs. {stayAmountPerNight}</h6>
          </div>
        </Column>
        {/* <hr /> */}
      </ColumnGroup>
    </>
  );
};

export default Stay;
