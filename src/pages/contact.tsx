import React from "react";
import bannerImg from "@/assets/images/contact-md.jpg";
import ContactForm from "@/layout/contact_page/contactForm";
import Address from "@/layout/contact_page/address";
import Layout from "@/shared/Layout";

const ContactUs = () => {
  return (
    <Layout bannerImg={bannerImg} title="<span>Contact Us</span>">
      <ContactForm />
      <Address />
    </Layout>
  );
};

export default ContactUs;
