import React from "react";
import "./Faq.css";
import { faqAPI } from "../../FAQ";

console.log(faqAPI);

const Faq = () => {
  return (
    <>
      {/* {faqAPI.map((el) => {
        return (
          <div>
            <h3>{el.heading}</h3>
            <p>{el.text}</p>
          </div>
        );
      })} */}
    </>
  );
};

export default Faq;
