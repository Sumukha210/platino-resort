import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      message: "something went wrong,please try after some time",
      status: "fail",
    });
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

export default handler;
