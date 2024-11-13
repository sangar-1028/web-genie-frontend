import React from "react";
import "./style.scss";
import { ButtonField } from "../../CommonComponent";
import { Icon } from "../../assests/images/constant";
import { useNavigate } from "react-router-dom";
import {ReactComponent as StarsIllustration} from "../../assests/icons/stars.svg"
import {ReactComponent as RaysIllustration} from "../../assests/icons/rays.svg"
import {ReactComponent as Line3} from "../../assests/icons/line-3.svg"

const Header = () => {
 const navigate = useNavigate()
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          {/* <div className="logo-wrapper"> */}
            <div className="headerLogo">
              <img src={Icon.logo} alt="logo style" />
            </div>
          {/* </div> */}
          <ButtonField
            buttonStyle={"buttonStyle"}
            onClick={() => navigate("/playground")}
          >
            Use playground
            <Line3 className="line-1" />
          </ButtonField>
        </div>
        <StarsIllustration className="stars-illustration" />
        <RaysIllustration className="rays-illustration" />
      </div>

    </>
  );
};

export default Header;
