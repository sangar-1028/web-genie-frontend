import React from "react";
import "./style.scss";
import image from "../../assests/images/pic1.svg";
import image2 from "../../assests/images/pic2.svg";
import {ReactComponent as GridIllustration} from "../../assests/icons/grid.svg"
import {ReactComponent as Line1} from "../../assests/icons/line-1.svg"
import {ReactComponent as Line2} from "../../assests/icons/line-2.svg"
import { motion } from "framer-motion"
import Grid from "./Grid";

const SecondContainer = () => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        // ease: "circIn",
        staggerChildren: 0.2,
        duration: 0.5,
        delay: 1,
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      }
    }
  }


  const content = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65
      }
    },
    hidden: {
      opacity: 0,
      y: 10
    }
  }

  return (
    <div className="container-2">
      <motion.div className="secondContainer !py-28 md:pt-32 lg:pt-[136px]" variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="seoondHeader" variants={content}>
          Your Design-to-Code Genie, Just One Wish Away
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={content}>
          <motion.div className="secondSubHeaderContainer">
            <div className="secondSubHeaderText">Turn <span className="subtext-span">landing page design</span></div>
            <img className="header-txt-img" src={image} alt="image2" />
          </motion.div>
          <motion.div className="secondSubHeaderText special-part">images into production-ready <span className="hidden screen-text">code <span className="subtext-span magic-span">&nbsp;- Like Magic!</span></span></motion.div>

          <motion.div className="secondSubHeaderContainer bottom-subheader">
            <div className="secondSubHeaderText">code</div>
            <img className="header-txt-img" src={image2} alt="image3" />
            <div className="subtext-span magic-span">&nbsp;- Like Magic! </div>
            <span className="emoji">🧞</span>
          </motion.div>
        </motion.div>

        <motion.div className="mt-4 secondSubText lg:mt-2" variants={content}>
          Upload any landing page design and watch WebGenie transform it into
          clean, responsive HTML & CSS in seconds
        </motion.div>

        <motion.button className="cta-button" variants={content}>
          {/* <motion.div className="btn-highlight"></motion.div> */}
          <Line1 className="line-1" />
          Use Webgenie - <span className="btn-subtext">For Free!</span>
          <Line1 className="line-2" />
        </motion.button>
      </motion.div>
      <GridIllustration className="grid-illustration" />
    </div>
  );
};

export default SecondContainer;
