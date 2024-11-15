import { Icon } from "../../assests/images/constant";
import React from "react";
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <div className="header">
        <div className="headerContainer">
          <div className="headerLogo">
            <img src={Icon.logo} alt="logo style" />
          </div>
          <div className="footerText">Privacy & Terms</div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
