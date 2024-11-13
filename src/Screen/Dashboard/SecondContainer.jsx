import React from "react";
import "./style.scss";
import image from "../../assests/images/pic1.svg";
import image2 from "../../assests/images/pic2.svg";
import {ReactComponent as GridIllustration} from "../../assests/icons/grid.svg"
import {ReactComponent as Line1} from "../../assests/icons/line-1.svg"
import {ReactComponent as Line2} from "../../assests/icons/line-2.svg"

const SecondContainer = () => {
  return (
    <div className="container-2">
      <div className="secondContainer">
        <div className="seoondHeader">
          Your Design-to-Code Genie, Just One Wish Away
        </div>
        <div className="secondSubHeaderContainer">
          <div className="secondSubHeaderText">Turn <span className="subtext-span">landing page design</span></div>
          <img src={image} alt="image2" />
        </div>
        <div className="secondSubHeaderText">images into production-ready</div>

        <div className="secondSubHeaderContainer">
          <div className="secondSubHeaderText">code</div>
          <img src={image2} alt="image3" />
          <div className="subtext-span magic-span">- Like Magic! </div>
          <span className="emoji">🧞</span>
        </div>
        <div className="secondSubText">
          Upload any landing page design and watch WebGenie transform it into
          clean, responsive HTML & CSS in seconds
        </div>

        <button className="cta-button">
          <Line1 className="line-1" />
          Use Webgenie - <span className="btn-subtext">For Free!</span>
          <Line1 className="line-2" />
        </button>
      </div>
      <GridIllustration className="grid-illustration" />
    </div>
  );
};

export default SecondContainer;
