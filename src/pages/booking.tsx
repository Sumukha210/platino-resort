import React from "react";
import Layout from "@/shared/Layout";
import bannerImg from "@/assets/images/about-md.jpg";
import BookingDetailsForm from "@/layout/booking_page/bookingDetailsForm";

const BookNowPage = () => {
  return (
    <Layout
      bannerImg={bannerImg}
      title="<span>Book</span><span>your stay</span>">
      <BookingDetailsForm />
    </Layout>
  );
};

export default BookNowPage;
