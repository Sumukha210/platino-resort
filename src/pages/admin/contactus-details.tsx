import React from "react";
import { client } from "@/utils/prismaClient";
import { Contactus } from "@prisma/client";

const ContactusDetails = ({ details }: any) => {
  return (
    <div className="custom-container component-inner-gap">
      <div className="row">
        {details.length &&
          details.map(({ name, email, subject, message, id }: Contactus) => (
            <div className="col-md-6" key={id} style={{ marginBottom: "3rem" }}>
              <h3>Name:-{name}</h3>
              <h5>Email:-{email}</h5>
              <h3>Subject:- {subject}</h3>
              <p>{message}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContactusDetails;

ContactusDetails.requireAuth = true;

export async function getServerSideProps() {
  const details: Contactus[] = await client.contactus.findMany();

  return { props: { details } };
}
