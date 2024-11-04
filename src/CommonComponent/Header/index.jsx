import React from "react";
import "./style.scss";
import { ButtonField } from "../../CommonComponent";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerLogo">
            Web&nbsp;
            <span
              style={{ color: "#D11CE9", fontSize: "32px", fontWeight: "bold" }}
            >
              g
            </span>
            enie
          </div>
          <ButtonField
            text="Use playground"
            buttonStyle={{
                width: "20%",
                height: "48px",
                border: "1px solid transparent",
                borderBottom: "1px solid",
                borderRadius: "14px",
                borderImageSlice: 1,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                background: "linear-gradient(to right, #808080, #555555)",
                borderColor: "#FFFFFF1A",
                borderWidth: 2,
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
              }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
