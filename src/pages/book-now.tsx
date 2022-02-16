import Button from "@/element/button";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const BookNow = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="container component-inner-page margin-top">
        <h1 className="heading-1">Book now page</h1>

        <div className="component-inner-gap">
          <input
            type="text"
            value={email}
            placeholder="enter your email"
            onChange={e => setEmail(e.target.value)}
          />
          {email && (
            <Button
              name="sign in"
              onClickHandler={() => signIn("email", { email })}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BookNow;
