import React, { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import "./style.scss";
import { Divider } from "antd";
import { Icon } from "../../../assests/images/constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UploadImageContainer = ({ setEnableUploadImage, setUploadedImage }) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

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

    if (file) {
      if (file.size > 1024 * 1024) {
        handleGenerateError();
      } else {
        setImage(file); 
        setUploadedImage(file);
      }
    }
  };

  const handleGenerateImage = () => {};




  return (
    <>
      <div>
        <div className="uploadImageContainer">
          <div className="uploadHeaderText">Upload Image</div>
          <CgClose
            color="#939393"
            size={24}
            onClick={() => setEnableUploadImage(false)}
          />
        </div>

        <Divider style={{ borderColor: "#FFFFFF0D" }} />

        {image ? (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={URL.createObjectURL(image)}
                alt="upload icon"
                className="imageStyle"
              />
            </div>

            <div
              className="uploadButtonContainer"
              onClick={handleGenerateImage}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Icon.star} alt="upload icon" width={24} height={24} />
              <span>Generate Code</span>
            </div>
          </>
        ) : (
          <>
            <div className="uploadImageItemStyle">
              <img
                src={Icon.cloudPlus}
                alt="upload icon"
                width={24}
                height={24}
                color="#9d9d9d"
              />

              <div className="uploadText">
                Clik here to upload or drag and drop image here
              </div>
            </div>

            <div
              className="uploadButtonContainer"
              onClick={handleClick}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="file"
                ref={fileInputRef}
                id="upload"
                accept=".jpg, .jpeg, .png"
                style={{ display: "none" }}
                onChange={handleFileChange} // Handle file selection
              />
              <img
                src={Icon.ImageUploader}
                alt="upload icon"
                width={24}
                height={24}
              />
              <span>Upload Image</span>
            </div>

            <div className="preCautionText">
            Maximum size: 1MB
            </div>
          </>
        )}
      </div>

      <ToastContainer />
    </>
  );
};
