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
import { TextGenerateContainer } from "./Components/TextGenerateContainer";
const Playground = ({ onClose }) => {

  const [image, setImage] = useState(null);
  const [enableUploadImage, setEnableUploadImage] = useState(false);
  const [enableText, setEnableText] = useState(false);
  const [textGenerate, setTextGenerate] = useState("")
  const [generatedImage, setGeneratedImage] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [enableCollapse, setEnableCollapse] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false)

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
    console.log(textGenerate)
    console.log(image)
    console.log(searchText)

    if (cancel) {
      setIsGenerating(false)
      setEnableCollapse(false)
      return;
    }

    if (image || textGenerate || searchText) {
      setIsGenerating(true)
      setTimeout(() => {
        // Display the code editor
        // setEnableCollapse(true);
        // Remove all loading UI
        setIsGenerating(false);
        // Set Image to display
        setGeneratedImage(image);

        // Close all modals
        setEnableText(false);
        setEnableUploadImage(false);
      }, 5000)
    } else handleGenerateInfo();
  }, [searchText, generatedImage, textGenerate, enableCollapse, isGenerating, image]);

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
              enableText={enableText}
              setEnableText={setEnableText}
            />
            {enableUploadImage && (
              <div className="playgroundModalUploadContainer">
                <UploadImageContainer
                  setEnableUploadImage={setEnableUploadImage}
                  handleGenerateButton={handleGenerateButton}
                  isGenerating={isGenerating}
                  image={image}
                  setImage={setImage}
                />
              </div>
            )}
            {enableText && (
              <div className="playgroundModalUploadContainer">
                <TextGenerateContainer
                  setEnableText={setEnableText}
                  setTextGenerate={setTextGenerate}
                  handleGenerateButton={handleGenerateButton}
                  textGenerate={textGenerate}
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
            {generatedImage ? (
              <img className="generated-img" src={URL.createObjectURL(generatedImage)} alt="Website generated" />
            ) : (
              <DetailContainer
                searchText={searchText}
                setSearchText={setSearchText}
                handleGenerateButton={handleGenerateButton}
                isGenerating={isGenerating}
              />
            )}
          </div>
          {screenSize.size > 1024 && (
            <div className="playgroudSizeContainer">
              <RotateContainer />
            </div>
          )}
        </div>

        {generatedImage ? (
          <div className="playgroundFooterContainer">
            <CollapseContainer
              setEnableCollapse={setEnableCollapse}
              img={generatedImage}
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
