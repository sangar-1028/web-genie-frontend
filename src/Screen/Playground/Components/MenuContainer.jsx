import React, { useMemo } from "react";
import { Icon } from "../../../assests/images/constant";
import "./style.scss";
import { Divider } from "antd";
const MenuContainer = ({ screenSize, setEnableUploadImage, enableUploadImage }) => {

  const isScreenSmall = useMemo(() => {
    if (window.innerWidth > 1024) {
      return true;
    } else {
      return false;
    }
  }, [screenSize]);

  return (
    <>
      <div className="logoContainer">
        <img src={Icon.logo} alt="logo style" />
      </div>
      <div className="itemContainer">
        <img src={Icon.EditText} alt="edit icon" width={32} height={32} />
        <div className="itemText">Text to Code</div>
      </div>

      <div className="itemContainer" onClick={() => setEnableUploadImage(!enableUploadImage)}>
        <img
          src={Icon.ImageUploader}
          alt="upload icon"
          width={32}
          height={32}
        />
        <div className="itemText">Image to Code</div>
      </div>
      {isScreenSmall && <Divider style={{ borderColor: "#939393", marginTop: "60px" }} />}

      <div className="itemContainer" style={{ marginTop: "20px" }}>
        <img src={Icon.Brush} alt="clear icon" width={32} height={32} />
        <div className="itemText">Clear Canvas</div>
      </div>
    </>
  );
};

export default MenuContainer;
