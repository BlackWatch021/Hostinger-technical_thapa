import React from "react";
import "./MidContent.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import Fade from "react-reveal/Fade";

const MidContent = () => {
  return (
    <div className="midContent">
      <div className="midContent_contianer1">
        <div className="part1_1">
          <Fade left>
            <h2 className="part1_1_heading">24/7/365 live support</h2>
          </Fade>
          <Fade left>
            <p className="part1_1_para">
              With us, you don’t need to worry that you won't be able to receive
              help from your web host when you really need it. Our experienced
              and hands-on Customer Success team is available 24 hours a day,
              365 days a year.
            </p>
          </Fade>

          <br />
          <br />
          <Fade left>
            <h2 className="part1_1_heading">
              Top-performing websites using cutting-edge technology
            </h2>
          </Fade>
          <Fade left>
            <p className="part1_1_para">
              With us, you don’t need to worry that you won't be able to receive
              help from your web host when you really need it. Our experienced
              and hands-on Customer Success team is available 24 hours a day,
              365 days a year.
            </p>
          </Fade>
          <a href="#">Learn more</a>
          <br />
          <br />

          <Fade left>
            <h2 className="part1_1_heading">Migrate for free and with ease</h2>
          </Fade>

          <Fade left>
            <p className="part1_1_para">
              We care about your success, so transferring your website to
              Hostinger and getting a domain name will cost you nothing.
              Furthermore, we'll handle the process for you so you can
              concentrate on what matters the most.
            </p>
          </Fade>
        </div>
        <div className="part1_2">
          <img className="mid_img1" src={img1} alt="Img1"></img>
        </div>
      </div>

      <div className="midContent_contianer1">
        <div className="part1_2">
          <img className="mid_img2" src={img2} alt="Img1"></img>
        </div>
        <div className="part1_1">
          <Fade right>
            <h2 className="part1_1_heading">
              Everything you need to get started with WordPress
            </h2>
          </Fade>
          <Fade right>
            <p className="part1_1_para">
              Allow your WordPress website to take the centre stage with
              LiteSpeed-powered servers and custom-built powerful WordPress site
              optimization tools.
            </p>
          </Fade>

          <br />
          <br />
          <Fade right>
            <h2 className="part1_1_heading">
              We care about security, at all times
            </h2>
          </Fade>
          <Fade right>
            <p className="part1_1_para">
              Don't let your website become a target of cyber attacks. With
              Premium and Business shared hosting plans, you get in-house
              designed WAF to keep your site safe.
            </p>
          </Fade>

          <br />
          <br />

          <Fade right>
            <h2 className="part1_1_heading">
              No prior experience is necessary
            </h2>
          </Fade>
          <Fade right>
            <p className="part1_1_para">
              To get started with Hostinger, you don't need to be an expert.
              You'll be able to launch your website in minutes thanks to our
              simple control panel and straightforward design. Are you concerned
              about the language barrier? Don't worry, our hPanel is available
              in 15 languages.
            </p>
          </Fade>
        </div>
      </div>

      <div className="midContent_contianer2"></div>
    </div>
  );
};

export default MidContent;
