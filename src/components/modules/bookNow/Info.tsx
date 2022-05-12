import Button from "@/element/button";
import { useRouter } from "next/router";
import React from "react";

const Info = () => {
  const router = useRouter();

  return (
    <>
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-8">
            <div className="content">
              <h4 className="heading-3 bold heading">
                Your holiday at Platino
              </h4>
              <p className="sub-title-2 subtitle">
                Would you like to experience Platino unique atmosphere up close?
                Book your holiday in Malnad now and enjoy days relaxing in
                largely untouched nature.
              </p>
              <Button
                onClickHandler={() => router.push("/booking")}
                name="Book now"
                isDarkBtn={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
