// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type pricingType = "Weekend" | "Midweek" | "Week";

export interface IPricing {
  season: "Mar - May" | "June - Aug" | "Sep - Nov" | "Dec - Feb";
  type: pricingType;
  price: number;
  month: number[];
}
// const month = 5;

// const res= data.filter(item=>item.month.find(m=>m==month)).find(item=>item.type==="Week")
// console.log((res.price/7) * (13 - 7) ) //if it is more then weekend i.e., 13 days

const data: IPricing[] = [
  { season: "Dec - Feb", type: "Weekend", price: 3200, month: [12, 1, 2] }, // 1600
  { season: "Dec - Feb", type: "Midweek", price: 4500, month: [12, 1, 2] }, // 900
  { season: "Dec - Feb", type: "Week", price: 7000, month: [12, 1, 2] }, // 1000

  { season: "Mar - May", type: "Weekend", price: 3000, month: [3, 4, 5] }, // 1500
  { season: "Mar - May", type: "Midweek", price: 4000, month: [3, 4, 5] }, // 800
  { season: "Mar - May", type: "Week", price: 6300, month: [3, 4, 5] }, // 900

  { season: "Sep - Nov", type: "Weekend", price: 2000, month: [6, 7, 8] }, // 1000
  { season: "Sep - Nov", type: "Midweek", price: 3000, month: [6, 7, 8] }, // 600
  { season: "Sep - Nov", type: "Week", price: 4900, month: [6, 7, 8] }, // 700

  { season: "June - Aug", type: "Weekend", price: 1800, month: [9, 10, 11] }, // 900
  { season: "June - Aug", type: "Midweek", price: 2500, month: [9, 10, 11] }, // 500
  { season: "June - Aug", type: "Week", price: 4200, month: [9, 10, 11] }, // 600
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ result: data });
}
