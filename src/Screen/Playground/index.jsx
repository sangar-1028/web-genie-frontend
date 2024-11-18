import React, { useCallback, useEffect, useState } from "react";
import { calculateSize } from "../../utilies/constantFuntion";
import "./style.scss";
import { CgClose } from "react-icons/cg";
import { ReactComponent as CodeBlockIcon } from "../../assests/icons/code-block.svg"
import { AnimatePresence, motion } from "framer-motion";

import {
  DetailContainer,
  MenuContainer,
  RotateContainer,
  UploadImageContainer,
  CollapseContainer,
} from "./Components";
import { toast } from "react-toastify";
import { TextGenerateContainer } from "./Components/TextGenerateContainer";
import { Link } from "react-router-dom";
import PageTransition from "../../CommonComponent/PageTransition";
const Playground = () => {

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

  const containerVariant = {
    visible: {
      opacity: 1,
      scaleY: 1,
      originY: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
    hidden: {
      opacity: 0,
      scaleY: 0,
      originY: 1,
      transition: {
        duration: 3,
        when: "afterChildren"
      }
    }
  }

  const componentVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.7
      }
    }
  }

  const visibleParent = {
    visible: {
      opacity: 1,
      transition: {
        // duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <PageTransition>
      <motion.div className="modal">
        <motion.div className={`playgroundModal ${enableCollapse ? "editor-showing" : ""}`}>
          {/* <motion.div > */}
            <motion.div className="playgroundHeader" variants={componentVariant}>
              <div className="PlaygroundTitle">Playground</div>
              <Link to="/">
                <button className="">
                {/* onClick={onClose} */}
                  <CgClose
                    color="#939393"
                    size={24}
                  />
                  {/* <CloseIcon /> */}
                </button>
              </Link>
            </motion.div>

            <motion.div className="flex justify-between gap-8 p-4 playgroundContainer" variants={componentVariant}>
              <div className="flex justify-center w-full gap-3 lg:w-fit lg:justify-start playgroundMenus">
                <MenuContainer
                  screenSize={screenSize}
                  setEnableUploadImage={setEnableUploadImage}
                  enableUploadImage={enableUploadImage}
                  enableText={enableText}
                  setEnableText={setEnableText}
                />
                {/* <AnimatePresence mode="sync"> */}
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
                {/* </AnimatePresence> */}
                {/* <AnimatePresence mode="sync"> */}
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
                {/* </AnimatePresence> */}
              </div>

              <div
                className="playgroudContentContainer w-full mt-72 xs2:mt-52 lg:mt-36 mb-48 flex flex-col items-center rounded-[20px] mx-8"
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
              
              <CollapseContainer
                enableCollapse={enableCollapse}
                setEnableCollapse={setEnableCollapse}
                img={generatedImage}
                searchText={searchText}
                screenSize={screenSize}
              />
            </motion.div>
          {/* </motion.div> */}

          {/* {generatedImage ? (
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
          )} */}
        </motion.div>
      </motion.div>
    </PageTransition>
  );
};

export default Playground;
