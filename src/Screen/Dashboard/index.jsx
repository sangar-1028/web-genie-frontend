import React from "react";
import "./style.scss";
import Header from "../../CommonComponent/Header";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FourthContainer from "./FourthContainer";
const Dashboard = () => {
  return (
    <div className="mainContainer">
      <Header />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
    </div>
  );
};

export default Dashboard;
