import React from "react";
import "./style.scss";
import { LiaPenNibSolid } from "react-icons/lia";
import { MdElectricBolt } from "react-icons/md";
const ThirdContainer = () => {
  return (
    <div className="thirdContainer">
      <div className="thirdBoxContainer">
        <div className="thirdIconBox">
          <LiaPenNibSolid size={"24px"} color="#D11CE9" />
        </div>

        <div className="thirdTextBox">Pixel-Perfect Accuracy</div>

        <div className="thirdSubTextBox">
          Our AI aligns code with design, minimizing developer-designer
          back-and-forth.
        </div>
      </div>
      <div className="thirdBoxContainer">
        <div className="thirdIconBox">
          <LiaPenNibSolid size={"24px"} color="#D11CE9" />
        </div>
        <div className="thirdTextBox">Clean, Semantic Code</div>
        <div className="thirdSubTextBox">
          Use clean, semantic HTML and optimized CSS. Keep code lean and avoid
          unnecessary divs.
        </div>
      </div>
      <div className="thirdBoxContainer">
        <div className="thirdIconBox">
          <MdElectricBolt size={"24px"} color="#D11CE9" />
        </div>
        <div className="thirdTextBox">Instant Generation</div>
        <div className="thirdSubTextBox">
          Turn designs into production-ready code in seconds. What took hours
          now happens instantly.
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
