import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../../../assests/images/constant";
import "./style.scss";
import { ButtonField, InputField } from "../../../CommonComponent";
import { ReactComponent as AttachmentIcon } from "../../../assests/icons/attachment.svg";
import { ReactComponent as GenerateIcon } from "../../../assests/icons/generate.svg";
import { ReactComponent as Line4 } from "../../../assests/icons/line-4.svg";
import { ReactComponent as Ellipse3 } from "../../../assests/icons/ellipse-3.svg";

const DetailContainer = ({ textGenerate, setTextGenerate, handleGenerateButton, isGenerating, clearInput}) => {
    const [isFocus, setIsFocus] = useState(false)
    let searchInputRef = useRef(null);

    useEffect(() => {
      searchInputRef.current.focus();
    }, []);

    useEffect(() => {
      searchInputRef.current.textContent = "";
      searchInputRef.current.focus();
    }, [clearInput])

  return (
    <div className="flex flex-col justify-center items-center text-center [&>*]:relative [&>*]:z-10">
      <div className="w-32 h-12 p-3 md:w-40 headerLogoStyle">
        <img src={Icon.logo} alt="logo style" />
      </div>

      <div className="text-3xl italic font-bold xs2:font-semibold xs2:text-4xl lg:text-5xl subHeaderText">Your Design-to-Code Genie</div>

      <div className="subHeading">
        Upload any landing page design and watch WebGenie transform it into
        clean, responsive HTML & CSS in seconds
      </div>
      <div className="text-form w-full max-w-xl xl:max-w-[622px] flex flex-col items-center">
        <div className="inputstyle">
          <AttachmentIcon />
          <div className="relative w-full">
            <div ref={searchInputRef} className="relative z-10 search-input text-start" placeholder="Describe your landing page" contentEditable onInput={(e) => setTextGenerate(e.currentTarget.textContent)}>
            </div>
            <div className={`absolute inset-0 search-input placeholder text-start ${textGenerate ? "!invisible" : ""}`}>Describe your landing page</div>
          </div>
        </div>
        {/* <InputField
          placeholder="Describe your landing page"
          styleBox={isFocus ? "inputstylefocus" : "inputstyle"}
          prefix={<RiAttachment2 />}
          onChange={(event) => setTextGenerate(event.target.value)}
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
      <div className="ellipse-3"></div>
    </div>
  );
};

export default DetailContainer;
