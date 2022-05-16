import { IBookingDetails, IUserDetails } from "@/models/BookingDetails";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Checkout from "./checkout";
import { Container, Wrapper } from "./userDetails/styles";
import UserDetails from "./userDetails";
import useBookingStore from "../bookingStore";
import axios from "axios";

interface bookingDetailsProps {
  userDetails: IUserDetails;
  bookingDetails: IBookingDetails;
}

const BookingDetailsForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<IUserDetails>();
  const arrival = useBookingStore(s => s.arrival);
  const departure = useBookingStore(s => s.departure);
  const guests = useBookingStore(s => s.guests);

  const onSubmit: SubmitHandler<IUserDetails> = async data => {
    if (arrival && departure && guests) {
      const bookingDetails: bookingDetailsProps = {
        bookingDetails: { arrival, departure, guests },
        userDetails: data,
      };

      try {
        const res = await axios.post("/api/bookingDetails", bookingDetails);
        console.log("res", res.data.result);
      } catch (error) {}
    }
  };

  return (
    <Wrapper className="margin-top">
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-sm-8 col-lg-7 col-xl-6 ">
                    <UserDetails register={register} formState={formState} />
                  </div>

                  <div className="col-sm-8 col-lg-5 col-xl-5 offset-xl-1">
                    <Checkout />
                  </div>
                </div>
              </form>
            </Container>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BookingDetailsForm;
