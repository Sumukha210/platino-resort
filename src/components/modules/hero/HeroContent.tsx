import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { Content } from "./styles";
import { AiFillPlayCircle } from "react-icons/ai";
import { heroContentProps } from "./types";
import Button from "@/element/Button";
import Features from "./Features";

const HeroContent: React.FC<heroContentProps> = ({ forFrontPage, title }) => {
  return (
    <>
      <Content>
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h1
                className="title heading-2"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(title),
                }}></h1>

              {forFrontPage && (
                <>
                  <Button
                    onClickHandler={() => {}}
                    name="Watch Now"
                    Icon={AiFillPlayCircle}
                    isDarkBtn={false}
                  />
                  <Features />
                </>
              )}
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default HeroContent;
