import Hero from "@/module/hero";
import React from "react";
import bannerImg from "@/assets/images/contact-md.jpg";
import ContactForm from "@/layout/contact_page/contactForm";
import Address from "@/layout/contact_page/address";

const ContactUs = () => {
  return (
    <>
      <Hero bannerImg={bannerImg} title="<span>Contact Us</span>" />
      <ContactForm />
      <Address />
    </>
  );
};

export default ContactUs;
