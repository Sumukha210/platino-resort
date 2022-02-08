import Button from "@/element/Button";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import { menuNames } from "./utils";

interface RightSectionProps {
  setCurrentMenuNum: React.Dispatch<React.SetStateAction<number>>;
}

const RightSection: React.FC<RightSectionProps> = ({ setCurrentMenuNum }) => {
  const router = useRouter();

  return (
    <>
      <div className="right">
        <h6 className="caption-2 caption">Dining</h6>
        <h2 className="heading-4 title">Our Restaurant</h2>
        <p className="sub-title-1 sub-title">
          The buffet breakfast is served in the lounge on the ground floor and
          also outside on our little patio.
        </p>
        <div className="options">
          {menuNames.map(({ name }, num) => (
            <h6
              className="heading-5"
              key={name}
              onMouseEnter={() => {
                setCurrentMenuNum(num);
              }}>
              {name}
            </h6>
          ))}
        </div>

        <Button
          onClickHandler={() => router.push("/dining")}
          name="Learn more"
          Icon={BsArrowRight}
        />
      </div>
    </>
  );
};

export default RightSection;
