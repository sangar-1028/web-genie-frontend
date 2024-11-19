import React, { useMemo } from "react";
import { Icon } from "../../../assests/images/constant";
import "./style.scss";
import { Divider } from "antd";
import { Link } from "react-router-dom";


const MenuContainer = ({ screenSize, setEnableUploadImage, enableUploadImage, enableText, setEnableText, clearCanvas }) => {
  const openModal = (modal) => {
    if (modal === "image") {
      setEnableUploadImage(!enableUploadImage);
      setEnableText(false);
    }
    if (modal === "text") {
      setEnableUploadImage(false);
      setEnableText(!enableText);
    }
  }

  const isScreenSmall = useMemo(() => {
    if (window.innerWidth > 1024) {
      return true;
    } else {
      return false;
    }
  }, [screenSize]);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center py-4 mx-6 xs2:py-0 lg:py-5 xs2:justify-normal xs2:flex-nowrap gap-x-2 gap-y-4 xs2:gap-y-10 lg:flex-col playgroudMenuContainer xs2:mx-0">
      <Link to="/">
        <button className="logoContainer">
          <img src={Icon.logoIcon} alt="logo style" />
        </button>
      </Link>
      <button className={`itemContainer ${enableText ? "is-active" : ""}`} onClick={() => openModal("text")}>
        <img src={enableText ? Icon.EditTextLight : Icon.EditText} alt="edit icon" width={32} height={32} />
        <div className="itemText">Text to code</div>
      </button>

      <button className={`itemContainer ${enableUploadImage ? "is-active" : ""}`} onClick={() => openModal("image")}>
        <img
          src={enableUploadImage ? Icon.ImageUploaderLight : Icon.ImageUploader}
          alt="upload icon"
          width={32}
          height={32}
        />
        <div className="itemText">Image to code</div>
      </button>
      {isScreenSmall && <Divider className="divider" style={{ borderColor: "rgba(255, 255, 255, 0.05)", minWidth: "unset", maxWidth: "73px" }} />}

      <button className="itemContainer" onClick={clearCanvas}>
        <img src={Icon.Brush} alt="clear icon" width={32} height={32} />
        <div className="itemText">Clear Canvas</div>
      </button>
    </div>
  );
};

export default MenuContainer;
