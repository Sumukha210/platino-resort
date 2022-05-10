import type { NextApiRequest, NextApiResponse } from "next";
// import { client } from "@/utils/prismaClient";
import { Inputs } from "@/layout/contact_page/contactForm/types";
import db from "@/utils/dbConnection";
import { Contact } from "@/models/Contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, subject, message }: Inputs = req.body.data;

    try {
      await db.connect();

      const contact = await Contact.create({ name, email, subject, message });
      // await contact.save();

      db.disconnect();

      if (contact) {
        res.json({
          message:
            "Thank you for Contacting us, we will notify your query result shorty to the email id you have given",
          status: "success",
        });
      }
    } catch (error) {
      res.json({
        message: "something went wrong,please try after some time",
        status: "fail",
      });
    }
  } else if (req.method === "GET") {
    await db.connect();
    const result = await Contact.find().lean();
    await db.disconnect();

    res.json({ result });
  }
}
