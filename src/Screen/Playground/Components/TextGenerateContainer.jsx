import React from "react";
import { CgClose } from "react-icons/cg";
import "./style.scss";
import { Divider } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as Line3 } from "../../../assests/icons/line-2.svg"
import { ReactComponent as GenerateIcon } from "../../../assests/icons/generate.svg";
import { ReactComponent as LoadingIcon } from "../../../assests/icons/loading.svg"
import { pageVariant } from "../../../CommonComponent/PageTransition";
import { motion } from "framer-motion";

export const TextGenerateContainer = ({
  setEnableText,
  setTextGenerate,
  handleGenerateButton,
  isGenerating,
  textGenerate,
}) => {

  return (
    <>
      <motion.div className="playgroundModalUploadContainer bg-[rgba(10,10,10,1)] xl:bg-white xl:bg-opacity-[0.02] text-generate-modal" variants={pageVariant}>
        <div className="uploadImageContainer">
          <div className="uploadHeaderText">Text to code</div>
          <button onClick={() => {setEnableText(false); setTextGenerate("")}}>
            <CgClose
              color="#939393"
              size={18}
            />
          </button>
        </div>

        <Divider style={{ borderColor: "#FFFFFF0D", margin: "1.25rem 0" }} />

        <form className={`form-generate ${isGenerating ? "is-generating" : ""}`}>              
          <div className="form-container">
            <textarea
              className=""
              type="input"
              placeholder="Describe your landing page and let webgenie do its magic!"
              value={textGenerate}
              onInput={(e) => setTextGenerate(e.target.value)}
            />
            {
              isGenerating ? (
                <div className="text-generating">
                  <LoadingIcon className="loading-icon" />
                </div>
              ) : ""
            }
          </div>
        </form>

        <button
          className={`uploadButtonContainer ${isGenerating ? "is-generating" : ""}`}
          onClick={() => handleGenerateButton(textGenerate, true)}
        >
          <GenerateIcon className="text-generate-icon" />
          <span>{isGenerating ? "Generating code..." : "Generate Code"}</span>
          {!isGenerating ? <Line3 className="line-1" /> : ""}
        </button>
      </motion.div>
    </>
  );
};
