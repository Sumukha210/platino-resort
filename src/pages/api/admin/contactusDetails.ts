export {};

// import type { NextApiRequest, NextApiResponse } from "next";
// import { client } from "@/utils/prismaClient";
// import { Inputs } from "@/layout/contact_page/contactForm/types";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { name, email, subject, message }: Inputs = req.body.data;

//     try {
//       const result = await client.contactus.create({
//         data: { name, email, subject, message },
//       });
//       if (result) {
//         res.json({
//           message:
//             "Thank you for Contacting us, we will notify your query result shorty to the email id you have given",
//           status: "success",
//         });
//       }
//     } catch (error) {
//       res.json({
//         message: "something went wrong,please try after some time",
//         status: "fail",
//       });
//     }
//   } else if (req.method === "GET") {
//     res.json({ result: ["hello"] });
//   }
// }
