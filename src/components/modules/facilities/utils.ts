import { IconType } from "react-icons";
import { BsWifi } from "react-icons/bs";
import { FaSwimmingPool, FaUserFriends } from "react-icons/fa";
import { GiCampCookingPot, GiFilmProjector } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";

interface facilitiesType {
  name: string;
  Icon: IconType;
}

export const facilities: facilitiesType[] = [
  { name: "Free </br> Internet connection ", Icon: BsWifi },
  { name: "Wellness area & </br> Swimming Poll", Icon: FaSwimmingPool },
  { name: "Cable Tv & </br> projector", Icon: GiFilmProjector },
  { name: "Accommodation for up to 28 people", Icon: IoBedOutline },
  { name: "Disability-friendly Zone", Icon: FaUserFriends },
  { name: "Covered terrace & barbecue area", Icon: GiCampCookingPot },
];
