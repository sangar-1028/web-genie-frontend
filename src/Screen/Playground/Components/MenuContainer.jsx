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
      <button className="logoContainer">
        <img src={Icon.logoIcon} alt="logo style" />
      </button>
      <button className="itemContainer">
        <img src={Icon.EditText} alt="edit icon" width={32} height={32} />
        <div className="itemText">Text to code</div>
      </button>

      <button className="itemContainer" onClick={() => setEnableUploadImage(!enableUploadImage)}>
        <img
          src={Icon.ImageUploader}
          alt="upload icon"
          width={32}
          height={32}
        />
        <div className="itemText">Image to code</div>
      </button>
      {isScreenSmall && <Divider style={{ borderColor: "rgba(255, 255, 255, 0.05)", margin: 0 }} />}

      <button className="itemContainer">
        <img src={Icon.Brush} alt="clear icon" width={32} height={32} />
        <div className="itemText">Clear Canvas</div>
      </button>
    </>
  );
};

export default MenuContainer;
