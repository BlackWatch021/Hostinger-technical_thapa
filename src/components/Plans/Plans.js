import React from "react";
import "./Plans.css";
import check from "../../images/check.png";
import cross from "../../images/cross.png";

const Plans = () => {
  return (
    <div className="plans_container">
      {/* <img src={check}></img>
      <img src={cross}></img> */}
      <h1>Choose Your Web Hosting Plan</h1>
      <div className="plans_wrapper">
        {/* Card 1 */}
        <div className="plan_details">
          <div className="basic_info">
            <h2>Single Web Hosting</h2>
            <p className="description">Ideal solution for beginners</p>
            <br />
            <div className="discount">
              <p>₹329.00</p>
              <button>Save 79%</button>
            </div>

            <p>
              <sup>₹</sup>
              <span className="plans_pricing">69.00</span>
              <sub>/mo</sub>
            </p>

            <button className="btn">Add to cart</button>
            <p className="renew">₹159.00/mo when you renew</p>
          </div>

          <div className="plans_features">
            <h6 className="features_heading">Top feature comparison</h6>
            <p>
              <b>1</b> Websites
            </p>
            <p>
              <b>50 GB</b> SSD Storage
            </p>
            <p>
              <b>~10 000</b> Visits Monthly
            </p>
            <p>
              <b>1</b> Email
            </p>
            <p>
              <b>100 GB</b> Bandwidth
            </p>
            <p>
              <b>2</b> Database
            </p>

            <h6 className="features_heading">Security</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Unlimited</b> Free SSL
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Cloudflare</b> Protected Nameservers
            </p>

            <h6 className="features_heading">Bonus</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              Weelky Backups
            </p>
            <p>
              <img className="check_img" src={cross} alt="" />
              <b>Free</b>Domain(₹749.00 value)
            </p>

            <h6 className="features_heading">WordPress Options</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Managed</b>WordPress
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>WordPress</b>Accelaration
            </p>
            <p>
              <img className="check_img" src={cross} alt="" />
              WordPress Staging Tool
            </p>

            <h6 className="features_heading">Service and Support</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>30 Days</b>Money Back Guarantee
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>24/7/365</b>Support
            </p>
            <p>
              <img className="check_img" src={cross} alt="" />
              <b>99.9%</b>Uptime Guarantee
            </p>

            <h6 className="features_heading">Technical Details</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Git</b>Access
            </p>
            <p>
              <img className="check_img" src={cross} alt="" />
              <b>SSH</b>Access
            </p>

            <h6 className="features_heading">More Features</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>DNS</b> Management
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Access</b>Manager
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>2</b> Subdomains
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>1</b> FTP Account
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>2</b> Cronjobs
            </p>
          </div>

          <div className="show_more">
            <h3>See more features</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="plan_details">
          <div className="basic_info">
            <h2>Premium Web Hosting</h2>
            <p className="description">Perfect package for personal websites</p>
            <br />
            <div className="discount">
              <p>₹459.00</p>
              <button>Save 68%</button>
            </div>

            <p>
              <sup>₹</sup>
              <span className="plans_pricing">149.00</span>
              <sub>/mo</sub>
            </p>

            <button className="btn">Add to cart</button>
            <p className="renew">₹249.00/mo when you renew</p>
          </div>

          <div className="plans_features">
            <h6 className="features_heading">Top feature comparison</h6>
            <p>
              <b>100</b> Websites
            </p>
            <p>
              <b>100 GB</b> SSD Storage
            </p>
            <p>
              <b>~25 000</b> Visits Monthly
            </p>
            <p>
              <b>Free</b> Email
            </p>
            <p>
              <b>Unlimited</b> Bandwidth
            </p>
            <p>
              <b>Unlimited</b> Database
            </p>

            <h6 className="features_heading">Security</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Unlimited</b> Free SSL
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Cloudflare</b> Protected Nameservers
            </p>

            <h6 className="features_heading">Bonus</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              Weelky Backups
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Free</b>Domain(₹749.00 value)
            </p>

            <h6 className="features_heading">WordPress Options</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Managed</b>WordPress
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>WordPress</b>Accelaration
            </p>
            <p>
              <img className="check_img" src={cross} alt="" />
              WordPress Staging Tool
            </p>

            <h6 className="features_heading">Service and Support</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>30 Days</b>Money Back Guarantee
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>24/7/365</b>Support
            </p>
            <p>
              <img className="check_img" src={cross} alt="" />
              <b>99.9%</b>Uptime Guarantee
            </p>

            <h6 className="features_heading">Technical Details</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Git</b>Access
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>SSH</b>Access
            </p>

            <h6 className="features_heading">More Features</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>DNS</b> Management
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Access</b>Manager
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>100</b> Subdomains
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Unlimited</b> FTP Account
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Unlimited</b> Cronjobs
            </p>
          </div>

          <div className="show_more">
            <h3>See more features</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="plan_details">
          <div className="basic_info">
            <h2>Business Web Hosting</h2>
            <p className="description">
              Optimized for small and medium businesses
            </p>
            <br />
            <div className="discount">
              <p>₹649.00</p>
              <button>Save 62%</button>
            </div>

            <p>
              <sup>₹</sup>
              <span className="plans_pricing">249.00</span>
              <sub>/mo</sub>
            </p>

            <button className="btn">Add to cart</button>
            <p className="renew">₹499.00/mo when you renew</p>
          </div>

          <div className="plans_features">
            <h6 className="features_heading">Top feature comparison</h6>
            <p>
              <b>100</b> Websites
            </p>
            <p>
              <b>200 GB</b> SSD Storage
            </p>
            <p>
              <b>~100 000</b> Visits Monthly
            </p>
            <p>
              <b>Free</b> Email
            </p>
            <p>
              <b>Unlimited</b> Bandwidth
            </p>
            <p>
              <b>Unlimited</b> Database
            </p>

            <h6 className="features_heading">Security</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Unlimited</b> Free SSL
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Cloudflare</b> Protected Nameservers
            </p>

            <h6 className="features_heading">Bonus</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Daily</b> Backups (₹1,380.00 value)
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Free</b>Domain(₹749.00 value)
            </p>

            <h6 className="features_heading">WordPress Options</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Managed</b>WordPress
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>WordPress</b>Accelaration
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              WordPress Staging Tool
            </p>

            <h6 className="features_heading">Service and Support</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>30 Days</b>Money Back Guarantee
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>24/7/365</b>Support
            </p>
            <p>
              <img className="check_img" src={cross} alt="" />
              <b>99.9%</b>Uptime Guarantee
            </p>

            <h6 className="features_heading">Technical Details</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Git</b>Access
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>SSH</b>Access
            </p>

            <h6 className="features_heading">More Features</h6>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>DNS</b> Management
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Access</b>Manager
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>100</b> Subdomains
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Unlimited</b> FTP Account
            </p>
            <p>
              <img className="check_img" src={check} alt="" />
              <b>Unlimited</b> Cronjobs
            </p>
          </div>

          <div className="show_more">
            <h3>See more features</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
