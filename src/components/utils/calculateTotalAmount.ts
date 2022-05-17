import differenceInDays from "date-fns/differenceInDays";
import getMonth from "date-fns/getMonth";
import isSaturday from "date-fns/isSaturday";
import isSunday from "date-fns/isSunday";
import { IPricing, pricingType } from "src/pages/api/admin/pricing";

// if (arrival && departure && totalNights) {
//     console.log("Business Days", differenceInBusinessDays(departure, arrival));
//     // console.log("days to week", daysToWeeks(totalNights));
//     console.log("is it more then or equal to  7 days", totalNights >= 7);
//     console.log("get month", getMonth(arrival) + 1);
//   }

interface calculateTotalAmountResult {
  totalAmount: number;
  stayAmount: number;
  stayAmountPerNight: number;
}

export const calculateTotalAmount = (
  arrival: Date | null,
  departure: Date | null,
  guests: number,
  pricing: IPricing[] | null
): calculateTotalAmountResult => {
  if (arrival && departure && pricing) {
    const totalNights =
      arrival && departure && differenceInDays(departure, arrival);

    const month = getMonth(arrival) + 1;
    const totalAmountForGuests = guests > 2 ? (guests - 2) * 700 : 0;

    const getAmountPerMonthAndType = (type: pricingType) => {
      return pricing
        .filter(item => item.month.find(m => m == month))
        .find(item => item.type === type);
    };

    // For one or more week
    if (totalNights >= 7) {
      const result = getAmountPerMonthAndType("Week");
      console.log("Week");
      if (result) {
        const stayAmountPerNight = result.price / 7;
        const stayAmount =
          result.price + stayAmountPerNight * (totalNights - 7);

        return {
          stayAmount,
          totalAmount: stayAmount + totalAmountForGuests,
          stayAmountPerNight,
        };
      }
      // Weekend (Saturday or sunday)
    } else if (
      (totalNights >= 1 || totalNights <= 2) &&
      (isSaturday(arrival) || isSunday(arrival))
    ) {
      const result = getAmountPerMonthAndType("Weekend");
      console.log("Weekend");

      if (result) {
        const stayAmountPerNight = result.price / 2;
        const stayAmount = result.price;

        return {
          stayAmount,
          totalAmount: stayAmountPerNight * totalNights + totalAmountForGuests,
          stayAmountPerNight,
        };
      }
    } else {
      const result = getAmountPerMonthAndType("Midweek");
      console.log("Midweek");

      if (result) {
        const stayAmountPerNight = result.price / 5;
        const stayAmount = result.price;

        return {
          stayAmount,
          totalAmount: stayAmountPerNight * totalNights + totalAmountForGuests,
          stayAmountPerNight,
        };
      }
    }
  }

  return { stayAmount: 0, totalAmount: 0, stayAmountPerNight: 0 };
};
