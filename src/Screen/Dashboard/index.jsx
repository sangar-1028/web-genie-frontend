import React from "react";
import "./style.scss";
import Header from "../../CommonComponent/Header";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FourthContainer from "./FourthContainer";
import Footer from "../../CommonComponent/Footer/Footer";
import { motion } from "framer-motion"
import PageTransition from "../../CommonComponent/PageTransition";

const Dashboard = () => {
  return (
    <PageTransition>
      <motion.div className="mainContainer pb-5 xsm:pb-[50px]">
        {/* initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.9, ease: "anticipate" }} */}
        {/* <Loader /> */}
        <Header />
        <SecondContainer />
        <ThirdContainer />
        <FourthContainer />
        <Footer/>

        <motion.div
          className="ellipse-1"
          animate={{
            x: [0, "50%", "-50%", "0%", "50%", "0%"], // Covers left, center, right
            y: [0, "50%", "0%", "-50%", "100%", "0%"], // Covers top, middle, bottom
            scale: [1, 1.5, 1, 1.3, 1], // Varying size
            borderRadius: ["50%", "30%", "40%", "50%", "50%"], // Morph shapes
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="ellipse-2"
          animate={{
            x: [0, "-50%", "50%", "0%", "-50%", "0%"], // Covers left, center, right
            y: [0, "-50%", "50%", "0%", "-100%", "0%"], // Covers top, middle, bottom
            scale: [1, 1.4, 1.2, 1.6, 1], // Varying size
            borderRadius: ["50%", "30%", "40%", "30%", "50%"], // Morph shapes
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
    </PageTransition>
  );
};

export default Dashboard;
