import create from "zustand";
import { devtools } from "zustand/middleware";
import { IPricing } from "src/pages/api/admin/pricing";
import axios from "axios";

type pricingStoreTypes = {
  pricing: IPricing[] | null;
  getPricing: () => void;
};

const usePricingStore = create<pricingStoreTypes>()(
  devtools(
    set => ({
      pricing: null,
      getPricing: async () => {
        let res: any;
        try {
          res = await axios.get("/api/admin/pricing");
        } catch (error) {
          res = null;
          console.log("fetch pricing error", error);
        }
        set(() => {
          return { pricing: res.data.result || null };
        });
      },
    }),
    { name: "Pricing" }
  )
);

export default usePricingStore;
