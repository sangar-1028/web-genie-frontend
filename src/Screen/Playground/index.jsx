import React, { useCallback, useEffect, useState } from "react";
import { calculateSize } from "../../utilies/constantFuntion";
import "./style.scss";
import { CgClose } from "react-icons/cg";
import { ReactComponent as CodeBlockIcon } from "../../assests/icons/code-block.svg"

import {
  DetailContainer,
  MenuContainer,
  RotateContainer,
  UploadImageContainer,
  CollapseContainer,
} from "./Components";
import { toast } from "react-toastify";
const Playground = ({ onClose }) => {

  const [enableUploadImage, setEnableUploadImage] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [enableCollapse, setEnableCollapse] = useState(false);
  const [isGenerating, setIsGenerating] = useState(true)

  const [screenSize, setScreenSize] = useState({
    width: calculateSize(window.innerWidth),
    height: window.innerHeight,
    size: window.innerWidth,
  });

  const handleGenerateInfo = () => {
    toast.warning("Please upload an image or write to generate", {
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

  const handleGenerateButton = useCallback((event, cancel = false) => {
    if (cancel) {
      setIsGenerating(false)
      setEnableCollapse(false)
      return;
    }

    if (uploadedImage || searchText) {
      setIsGenerating(true)
      setTimeout(() => {
        setEnableCollapse(true);
        setIsGenerating(false);
      }, 5000)
    } else handleGenerateInfo();
  }, [searchText, uploadedImage, enableCollapse]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: calculateSize(window.innerWidth),
        height: window.innerHeight,
        size: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="modal">
      <div className="playgroundModal">
        <div className="playgroundHeader">
          <div className="PlaygroundTitle">Playground</div>
          <button className="" onClick={onClose}>
            <CgClose
              color="#939393"
              size={24}
            />
            {/* <CloseIcon /> */}
          </button>
        </div>

        <div className="playgroundContainer">
          <div className="playgroundMenus">
            <MenuContainer
              screenSize={screenSize}
              setEnableUploadImage={setEnableUploadImage}
              enableUploadImage={enableUploadImage}
            />
            {enableUploadImage && (
              <div className="playgroundModalUploadContainer">
                <UploadImageContainer
                  setEnableUploadImage={setEnableUploadImage}
                  setUploadedImage={setUploadedImage}
                  handleGenerateButton={handleGenerateButton}
                  isGenerating={isGenerating}
                />
              </div>
            )}
          </div>

          <div
            className="playgroudContentContainer"
            style={{
              // width:
              //   screenSize.size > 1024 && enableUploadImage
              //     ? "70%"
              //     : screenSize.size > 1024
              //     ? "85%"
              //     : "100%",
            }}
          >
            {/* {uploadedImage ? (
              <img src={URL.createObjectURL(uploadedImage)} alt="uploadedimage" />
            ) : ( */}
              <DetailContainer
                setSearchText={setSearchText}
                handleGenerateButton={handleGenerateButton}
              />
            {/* )} */}
          </div>
          {screenSize.size > 1024 && (
            <div className="playgroudSizeContainer">
              <RotateContainer />
            </div>
          )}
        </div>

        {enableCollapse ? (
          <div className="playgroundFooterContainer">
            <CollapseContainer
              setEnableCollapse={setEnableCollapse}
              img={uploadedImage}
              searchText={searchText}
              screenSize={screenSize}
            />
          </div>
        ) : (
          <button
            className="playgroundFooterContainer"
            onClick={() => setEnableCollapse(!enableCollapse)}
          >
            <div className="playgroundFooterBarContainer">
              <div className="playgroundFooterBar">
                <CodeBlockIcon />
                <p>Tap here to open code editor</p>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Playground;
