import React from "react";
import "./style.scss";
import Header from "../../CommonComponent/Header";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FourthContainer from "./FourthContainer";
import Footer from "../../CommonComponent/Footer/Footer";
const Dashboard = () => {
  return (
    <div className="mainContainer">
      <Header />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <Footer/>
    </div>
  );
};

export default Dashboard;
