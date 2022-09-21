import React, { useState } from "react";
import "./Faq.css";
import { faqAPI, svg } from "../../FAQ";

const Faq = () => {
  let [rotateSVG, setRotateSVG] = useState();
  let [hideText, setHideText] = useState({});

  let [clicked, setClicked] = useState(false);

  const rotate = () => {
    if (clicked) {
      setClicked(false);
      setRotateSVG({});
      setHideText({});
    } else {
      setClicked(true);
      setRotateSVG({ transform: "rotate(180deg)" });
      setHideText({ display: "none" });
    }
  };

  return (
    <>
      <div className="faq_container">
        <h1>Website Hosting India FAQs</h1>
        <p>
          Find answers to frequently asked questions about website hosting and
          our services.
        </p>
        {faqAPI.map((el, id) => {
          return (
            <div key={id} className="faq_wrapper">
              <div className="faq_wrapper_head">
                <h2>{el.heading}</h2>
                <div onClick={rotate} style={rotateSVG}>
                  {svg}
                </div>
              </div>
              <p style={hideText}>{el.text}</p>
            </div>
          );
        })}
      </div>
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
