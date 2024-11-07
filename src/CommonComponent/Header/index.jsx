import React from "react";
import "./style.scss";
import { ButtonField } from "../../CommonComponent";
import { Icon } from "../../assests/images/constant";
import { useNavigate } from "react-router-dom";
const Header = () => {
 const navigate = useNavigate()
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerLogo">
            Web&nbsp;
            <img src={Icon.logo} alt="logo style" />
            enie
          </div>
          <ButtonField
            text="Use playground"
            buttonStyle={"buttonStyle"}
            onClick={() => navigate("/playground")}
          />
        </div>
      </div>

    </>
  );
};

export default Header;
