// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface IPricing {
  season: "Jan - Mar" | "Apr - Jun" | "Jul - Oct" | "Nov - Dec";
  type: "Weekend" | "Midweek" | "Week";
  price: number;
}

const data: IPricing[] = [
  { season: "Jan - Mar", type: "Weekend", price: 2000 }, // 1000
  { season: "Jan - Mar", type: "Week", price: 4900 }, // 700
  { season: "Jan - Mar", type: "Midweek", price: 3000 }, // 600

  { season: "Apr - Jun", type: "Week", price: 6300 }, // 900
  { season: "Apr - Jun", type: "Weekend", price: 3000 }, // 1500
  { season: "Apr - Jun", type: "Midweek", price: 4000 }, // 800

  { season: "Jul - Oct", type: "Weekend", price: 1800 }, // 900
  { season: "Jul - Oct", type: "Midweek", price: 2500 }, // 500
  { season: "Jul - Oct", type: "Week", price: 4200 }, // 600

  { season: "Nov - Dec", type: "Weekend", price: 2400 }, // 1200
  { season: "Nov - Dec", type: "Midweek", price: 3500 }, // 700
  { season: "Nov - Dec", type: "Week", price: 5600 }, // 800
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ result: data });
}
