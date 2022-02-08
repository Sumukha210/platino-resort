import React from "react";
import { facilities } from "./utils";
import dompurify from "isomorphic-dompurify";

const RightSideSection = () => {
  return (
    <>
      <div className="right">
        <div className="row">
          {facilities.map(({ name, Icon }, key) => (
            <div
              className={`col-6 feature ${
                (key + 1 === facilities.length ||
                  key + 1 === facilities.length - 1) &&
                "mb-0"
              }`}
              key={key}>
              <span>{<Icon />}</span>
              <span
                className="sub-title-3"
                dangerouslySetInnerHTML={{
                  __html: dompurify.sanitize(name),
                }}></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSideSection;
