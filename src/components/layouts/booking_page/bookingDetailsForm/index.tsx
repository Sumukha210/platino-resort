import { IUserDetails } from "@/models/BookingDetails";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Overview from "./Overview";
import { Container, Wrapper } from "./styles";
import UserDetails from "./UserDetails";

const BookingDetailsForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<IUserDetails>();

  const onSubmit: SubmitHandler<IUserDetails> = async data => {
    console.log("Data", data);
  };

  return (
    <Wrapper className="margin-top">
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-sm-8 col-lg-7">
                    <UserDetails register={register} formState={formState} />
                  </div>

                  <div className="col-sm-8 col-lg-4 offset-lg-1">
                    <Overview />
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
