import { Icon } from "../../assests/images/constant";
import React from "react";
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <div className="header">
        <div className="px-4 py-4 xsm:px-16 headerContainer">
          <div className="w-32 xsm:w-40 xsm:h-12 headerLogo">
            <img src={Icon.logo} alt="logo style" />
          </div>
          <div className="text-sm font-normal footerText xsm:text-base">Privacy & Terms</div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
