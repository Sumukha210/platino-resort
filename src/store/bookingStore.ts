import create from "zustand";
import add from "date-fns/add";
import { devtools } from "zustand/middleware";
import isAfter from "date-fns/isAfter";

type BookingStoreTypes = {
  arrival: Date | null;
  departure: Date | null;
  guests: number;

  handleArrival: (date: Date | null) => void;
  handleDeparture: (date: Date | null) => void;
  handleGuests: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const useBookingStore = create<BookingStoreTypes>()(
  devtools(
    set => ({
      arrival: new Date(),
      departure: add(new Date(), { days: 2 }),
      guests: 1,

      handleArrival: date =>
        set(state => {
          if (date && state.departure && isAfter(date, state.departure)) {
            return { arrival: date, departure: add(date, { days: 2 }) };
          }
          return { arrival: date };
        }),

      handleDeparture: date => set(() => ({ departure: date })),
      handleGuests: e => set({ guests: parseInt(e.target.value) }),
    }),
    { name: "Booking" }
  )
);

export default useBookingStore;
