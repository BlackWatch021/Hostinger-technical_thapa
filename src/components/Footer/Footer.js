import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import card1 from "../../images/card1.webp";
import card2 from "../../images/card2.webp";
import card3 from "../../images/card3.webp";
import card4 from "../../images/card4.webp";
import card5 from "../../images/card5.webp";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import whatsapp from "../../images/whatsapp.svg";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_wrapper_1">
          <img src={logo} />
          <p>
            We are a web hosting company with a mission to help everyone who
            goes online succeed.
            <br />
            We accomplish this by continuously developing server technology,
            giving expert assistance, and ensuring a flawless online website
            hosting experience.
          </p>
          <div className="card_options">
            <img src={card1}></img>
            <img src={card2}></img>
            <img src={card3}></img>
            <img src={card4}></img>
            <img src={card5}></img>
          </div>
        </div>

        <div className="footer_wrapper_2">
          <h6>HOSTING</h6>
          <p>Web Hosting</p>
          <p>VPS Hosting</p>
          <p>Minecraft Server Hosting</p>
          <p>CyberPanel Hosting</p>
          <p>Cloud Hosting</p>
          <p>WordPress Hosting</p>
          <p>Email Hosting</p>
          <p>DMS Hosting</p>
          <p>Ecommerce Hosting</p>
          <p>Free Web Hosting</p>
          <p>Online Store</p>
          <p>Website Builder</p>
          <p>Buy Hosting</p>
        </div>

        <div className="footer_wrapper_2">
          <h6>DOMAIN</h6>
          <p>Domain Nave Serch</p>
          <p>Domain Transfer</p>
          <p>Free Domain Name</p>
          <p>XYZ Domain</p>
          <p>Cheap Domains</p>
          <p>Domain Extensions</p>
          <p>WHOIS LookUp</p>
          <p>Free SSL Certificate</p>
        </div>

        <div className="footer_wrapper_2">
          <h6>INFORMATION</h6>
          <p>Migrate To Hostinger</p>
          <p>System Status</p>
          <p>Affiliate Program</p>
          <p>Payment Methods</p>
          <p>Rewards</p>
          <p>Reviews</p>
          <p>Pricing</p>
          <p>SiteMap</p>

          <h6>Legal</h6>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className="footer_wrapper_2">
          <h6>COMPANY</h6>
          <p>About Hostinger</p>
          <p>Our Technology</p>
          <p>RoadMap</p>
          <p>Customer Care</p>
          <p>Blog</p>

          <h6>HELP</h6>
          <p>Tutorials</p>
          <p>Knowledge Base</p>
          <p>Report Online Abuse</p>
          <div className="socials_wrapper">
            <img className="socials" src={facebook} alt="" />
            <img className="socials" src={instagram} alt="" />
            <img className="socials" src={twitter} alt="" />
            <img className="socials" src={whatsapp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
