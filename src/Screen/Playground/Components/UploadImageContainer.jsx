import React, { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import "./style.scss";
import { Divider } from "antd";
import { Icon } from "../../../assests/images/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as Line3 } from "../../../assests/icons/line-2.svg"
import { ReactComponent as LoadingIcon } from "../../../assests/icons/loading.svg"

export const UploadImageContainer = ({
  setEnableUploadImage,
  handleGenerateButton,
  isGenerating,
  image,
  setImage
}) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleGenerateError = () => {
    toast.error("File size exceeds 1MB! Please upload a smaller image.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file, file.size, 1024 * 1024)

    if (file) {
      if (file.size > 1024 * 1024) {
        handleGenerateError();
      } else {
        setImage(file);
      }
    }
  };

  return (
    <>
      <div>
        <div className="uploadImageContainer">
          <div className="uploadHeaderText">Upload Image</div>
          <button onClick={() => {setEnableUploadImage(false); setImage(null)}}>
            <CgClose
              color="#939393"
              size={18}
            />
          </button>
        </div>

        <Divider style={{ borderColor: "#FFFFFF0D", margin: "1.25rem 0" }} />

        {image ? (
          <>
            <div className="upload-img-container"
            >
              <img
                src={URL.createObjectURL(image)}
                alt="upload icon"
                className="imageStyle"
                width={190}
                height={135}
              />
              {
                isGenerating ? (
                  <div className="img-generating">
                    <LoadingIcon className="loading-icon" />
                  </div>
                ) : ""
              }
            </div>

            <button
              className={`uploadButtonContainer ${isGenerating ? "is-generating" : ""}`}
              onClick={handleGenerateButton}
            >
              <img
                src={Icon.star}
                alt="upload icon"
                width={16}
                height={16}
              />
              <span>{isGenerating ? "Generating..." : "Generate Code"}</span>
              {!isGenerating ? <Line3 className="line-1" /> : ""}
            </button>
            {
              isGenerating ? <button className="cancel-generating-btn" onClick={(e) => handleGenerateButton(e, true)}>Cancel</button> : ""
            }
          </>
        ) : (
          <>
            <button className="uploadImageItemStyle" onClick={handleClick}>
              <img
                src={Icon.cloudPlus}
                alt="upload icon"
                width={24}
                height={24}
                color="#9d9d9d"
              />

              <div className="uploadText">
                Click here to upload or drag and drop image here
              </div>
              
              <input
                className="file-upload"
                type="file"
                title=" "
                ref={fileInputRef}
                id="upload"
                accept=".jpg, .jpeg, .png"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </button>

            <button
              className="uploadButtonContainer"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={Icon.ImageUploaderLight}
                alt="upload icon"
                width={16}
                height={16}
              />
              <span>Upload Image</span>
              <Line3 className="line-1" />
            </button>

            <div className="preCautionText">Maximum size: 1MB</div>
          </>
        )}
      </div>
    </>
  );
};
