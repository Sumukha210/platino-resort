import useBookingStore from "@/store/bookingStore";
import usePricingStore from "@/store/pricingStore";
import { calculateTotalAmount } from "@/utils/calculateTotalAmount";
import React from "react";
import { ColumnGroup, Column } from "./styles";

const Amount = () => {
  const arrival = useBookingStore(s => s.arrival);
  const departure = useBookingStore(s => s.departure);
  const guests = useBookingStore(s => s.guests);
  const pricing = usePricingStore(s => s.pricing);

  const { totalAmount, stayAmount } = calculateTotalAmount(
    arrival,
    departure,
    guests,
    pricing
  );

  console.log(`Total Amount:- ${totalAmount},stay Amount:- ${stayAmount}`);

  return (
    <>
      <ColumnGroup className="totAmount">
        <Column className="d-flex justify-content-between">
          <h5 className="sub-title-2">Total Amount</h5>
          <h5 className="sub-title-2">Rs. {totalAmount}</h5>
        </Column>
      </ColumnGroup>
    </>
  );
};

export default Amount;
