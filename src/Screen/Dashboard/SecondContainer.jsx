import React from "react";
import "./style.scss";
import image from "../../assests/images/pic1.svg";
import image2 from "../../assests/images/pic2.svg";
const SecondContainer = () => {
  return (
    <>
      <div className="secondContainer">
        <div className="seoondHeader">
          Your Design-to-Code Genie, Just One Wish Away
        </div>
        <div className="secondSubHeaderContainer">
          <div className="secondSubHeaderText">Turn landing page design</div>
          <img src={image} alt="image2" />
        </div>
        <div className="secondSubHeaderText">images into production-ready</div>

        <div className="secondSubHeaderContainer">
          <div className="secondSubHeaderText">Code</div>
          <img src={image2} alt="image3" />
          <div className="secondSubHeaderText">- Like Magic! </div>
        </div>
        <div className="secondSubText">
          Upload any landing page design and watch WebGenie transform it into
          clean, responsive HTML & CSS in seconds
        </div>

        <div className="secondFreeText">
        Use Webgenie - For Free!
        </div>
      </div>
    </>
  );
};

export default SecondContainer;
