import React, { useState } from "react";
import "./style.scss";
import { ButtonField } from "../../CommonComponent";
import Playground from "../../Screen/Playground";
import { Icon } from "../../assests/images/constant";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };
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
            onClick={openModal}
          />
        </div>
      </div>

      <Playground modalOpen={isOpen} onClose={openModal} />
    </>
  );
};

export default Header;
