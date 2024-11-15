import React from "react";
import "./style.scss";
import Header from "../../CommonComponent/Header";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FourthContainer from "./FourthContainer";
import Footer from "../../CommonComponent/Footer/Footer";
import { motion } from "framer-motion"

const Dashboard = () => {
  return (
    <motion.div className="mainContainer">
      {/* initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.9, ease: "anticipate" }} */}
      {/* <Loader /> */}
      <Header />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <Footer/>
    </motion.div>
  );
};

export default Dashboard;
