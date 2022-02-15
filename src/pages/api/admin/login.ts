import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/utils/prismaClient";
import { compare } from "bcrypt";
import cookie from "cookie";
import { sign } from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body?.email && req.body?.password) {
      const { email, password } = req.body;
      const secret = "randompassword123";
      console.log(email, password);

      try {
        const user = await client.user.findUnique({ where: { email } });
        if (!user) {
          console.log("user not found");
          return res.json({
            message: "Invalid email or password",
            status: "fail",
          });
        }

        compare(req.body.password, user.password, function (err, result) {
          if (!err && result) {
            const claims = { sub: user.id, myPersonEmail: user.email };
            const jwt = sign(claims, secret, { expiresIn: "1h" });

            res.setHeader(
              "Set-Cookie",
              cookie.serialize("auth", jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 3600,
                path: "/",
              })
            );
            res.json({ message: "Login is successfull", status: "success" });
          } else {
            res.json({ message: "Invalid email or password", status: "fail" });
          }
        });
      } catch (error: any) {
        res.json({
          message: "Internal server error",
          status: "fail",
        });

        console.log("Error", error);
      }
    } else {
      res.json({
        message: "Both email and password required",
        status: "fail",
      });
    }
  } else if (req.method === "GET") {
    res.status(405).json({ message: "Invalid method/route", status: "fail" });
  }
}
