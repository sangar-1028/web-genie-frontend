import { Icon } from "../../assests/images/constant";
import React from "react";
const Footer = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerLogo">
            Web&nbsp;
            <img src={Icon.logo} alt="logo style" />
            enie
          </div>
          <div className="footerText">Privacy & Terms</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
