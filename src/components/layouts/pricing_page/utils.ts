import axios from "axios";
import { IPricing } from "src/pages/api/admin/pricing";

export const fetchPricing = async (
  setPricing: React.Dispatch<React.SetStateAction<IPricing[] | null>>
) => {
  try {
    const res = await axios("/api/admin/pricing");
    setPricing(res.data.result);
  } catch (error) {
    console.log(error);
  }
};

export const tableValues = (pricing: IPricing[] | null) => {
  const seasons =
    pricing && Array.from(new Set(pricing.map(item => item.season)));

  const dayType =
    pricing && Array.from(new Set(pricing.map(item => item.type)));

  const sortedPricing = seasons
    ?.map(item =>
      pricing
        ?.filter(({ season }) => season === item)
        .sort((a, b) => b.type.localeCompare(a.type))
    )
    .flat();

  return { seasons, dayType, sortedPricing };
};
