import React, { useState } from "react";
import { Icon } from "../../../assests/images/constant";
import "./style.scss";
import { ButtonField, InputField } from "../../../CommonComponent";
import { ReactComponent as AttachmentIcon } from "../../../assests/icons/attachment.svg";
import { ReactComponent as GenerateIcon } from "../../../assests/icons/generate.svg";
import { ReactComponent as Line4 } from "../../../assests/icons/line-4.svg";
import { ReactComponent as Ellipse3 } from "../../../assests/icons/ellipse-3.svg";

const DetailContainer = ({ searchText, setSearchText, handleGenerateButton, isGenerating}) => {
    const [isFocus, setIsFocus] = useState(false)

  return (
    <>
      <div className="headerLogoStyle">
        <img src={Icon.logo} alt="logo style" />
      </div>

      <div className="subHeaderText">Your Design-to-Code Genie</div>

      <div className="subHeading">
        Upload any landing page design and watch WebGenie transform it into
        clean, responsive HTML & CSS in seconds
      </div>
      <div className="text-form">
        <div className="inputstyle">
          <AttachmentIcon />
          <div className="search-input" placeholder="Describe your landing page" contentEditable onInput={(e) => setSearchText(e.currentTarget.textContent)}>Describe your landing page</div>
        </div>
        {/* <InputField
          placeholder="Describe your landing page"
          styleBox={isFocus ? "inputstylefocus" : "inputstyle"}
          prefix={<RiAttachment2 />}
          onChange={(event) => setSearchText(event.target.value)}
        /> */}
        <ButtonField
          buttonStyle={`buttonStyle generate-btn ${isGenerating ? "is-generating" : ""}`}
          onClick={handleGenerateButton}
        >
          <GenerateIcon />
          <Line4 className="line-1" />
          {
            isGenerating ? "Generating..." : "Generate"
          }
        </ButtonField>

      </div>
      <Ellipse3 className="ellipse-3" />
    </>
  );
};

export default DetailContainer;
