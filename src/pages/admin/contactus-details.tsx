import React from "react";
import { client } from "@/utils/prismaClient";
import { Contactus } from "@prisma/client";

interface contactusDetailsProps {
  details: Contactus[];
}

const ContactusDetails: React.FC<contactusDetailsProps> = ({ details }) => {
  return (
    <div>
      {details.length &&
        details.map(({ name, email, subject, message, id }) => (
          <div key={id}>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{subject}</h2>
            <h2>{message}</h2>
          </div>
        ))}
    </div>
  );
};

export default ContactusDetails;

export async function getServerSideProps() {
  const details: Contactus[] = await client.contactus.findMany();

  return { props: { details } };
}
