import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/utils/prismaClient";
import { hash } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body?.email && req.body?.password) {
      const { email, password } = req.body;
      console.log(email, password);
      try {
        const hashedPassword = await hash(password, 10);
        await client.user.create({
          data: { email: email, password: hashedPassword },
        });

        res
          .status(200)
          .json({ message: "Your account is created", status: "success" });
      } catch (error: any) {
        if (error?.code === "P2002") {
          return res.json({
            message: "P2002",
            status: "fail",
          });
        }

        res.json({
          message: "Internal server error",
          status: "fail",
        });

        console.log("Error", error);
      }
    } else {
      res.status(400).json({
        message: "Both email and password required",
        status: "fail",
      });
    }
  } else if (req.method === "GET") {
    res.status(405).json({ message: "Invalid method/route", status: "fail" });
  }
}
