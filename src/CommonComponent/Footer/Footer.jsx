import { Icon } from "../../assests/images/constant";
import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="header">
        <div className="headerContainer">
          <div className="headerLogo">
            <img src={Icon.logo} alt="logo style" />
          </div>
          <div className="footerText">Privacy & Terms</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
