import React, { useCallback, useEffect, useState } from "react";
import { calculateSize } from "../../utilies/helpers";
import "./style.scss";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import { imgToBase64 } from "../../utilies/helpers";
import {
  DetailContainer,
  MenuContainer,
  RotateContainer,
  UploadImageContainer,
  CollapseContainer,
} from "./Components";
import { toast, ToastContainer } from "react-toastify";
import { TextGenerateContainer } from "./Components/TextGenerateContainer";
import { Link } from "react-router-dom";
import PageTransition, { pageVariant } from "../../CommonComponent/PageTransition";
import { generateCodeFromPrompt, generateCodeFromImg } from "../../utilies/apiServices";
const Playground = () => {

  const [image, setImage] = useState(null);
  const [enableUploadImage, setEnableUploadImage] = useState(false);
  const [enableText, setEnableText] = useState(false);
  const [textGenerate, setTextGenerate] = useState("")
  const [generatedImage, setGeneratedImage] = useState(null);
  const [enableCollapse, setEnableCollapse] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false)
  const [clearInput, setClearInput] = useState(0);
  const [solution, setSolution] = useState(null)

  const [screenSize, setScreenSize] = useState({
    width: calculateSize(window.innerWidth),
    height: window.innerHeight,
    size: window.innerWidth,
  });

  const handleGenerateInfo = () => {
    toast.warning("Please upload an image or write prompt to generate", {
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

  const handleGenerateButton = useCallback(async (prompt, isPrompt, cancel = false) => {
    if (cancel) {
      setIsGenerating(false)
      setEnableCollapse(false)
      return;
    }

    if (!image && !prompt) {
      handleGenerateInfo();
      return;
    }

    let result = null;

    setIsGenerating(true)
    if (prompt && prompt.length > 0 && isPrompt ) {
      setTextGenerate(prompt)
      result = await generateCodeFromPrompt(prompt)
    } else if (image && !isPrompt) {
      const base64Image = await imgToBase64(image);
      result = await generateCodeFromImg(base64Image);
    } else {
      handleGenerateInfo();
      setIsGenerating(false)
      return;
    }
    console.log('=== result ===>', result)
    // Display the code editor
    if (result) {
      setSolution(result)
      setEnableCollapse(true);
    } else {
      toast.warning("Something went wrong, please try again");
    }
    // Remove all loading UI
    setIsGenerating(false);
    // Set Image to display
    // setGeneratedImage(image);
    
    // Close all modals
    setEnableText(false);
    setEnableUploadImage(false);
  }, [generatedImage, enableCollapse, isGenerating, image]);

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

  function clearCanvas() {
    setClearInput(former => former + 1);
    setTextGenerate("");
    setImage(null);

    setEnableCollapse(false);
    setIsGenerating(false);
    setGeneratedImage(null);
    
    // Close all modals
    setEnableText(false);
    setEnableUploadImage(false);
  }

  return (
    <PageTransition>
      <motion.div className="modal">
        <motion.div className={`flex flex-col playgroundModal ${enableCollapse ? "editor-showing" : ""}`}>
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

            <motion.div className="flex justify-between flex-1 gap-8 p-4 playgroundContainer" variants={componentVariant}>
              <div className="z-20 flex justify-center w-full gap-3 lg:w-fit lg:justify-start playgroundMenus xl:z-10">
                <MenuContainer
                  screenSize={screenSize}
                  setEnableUploadImage={setEnableUploadImage}
                  enableUploadImage={enableUploadImage}
                  enableText={enableText}
                  setEnableText={setEnableText}
                  clearCanvas={clearCanvas}
                />
                <AnimatePresence mode="sync">
                  {enableUploadImage && (
                    <motion.div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black xl:bg-transparent bg-opacity-80 xl:relative px-4" variants={pageVariant} initial="hidden" animate="visible" exit="remove" transition={{duration: 0.2, staggerChildren: 0.3}}>
                      <UploadImageContainer
                        setEnableUploadImage={setEnableUploadImage}
                        handleGenerateButton={handleGenerateButton}
                        isGenerating={isGenerating}
                        image={image}
                        setImage={setImage}
                      />
                    </motion.div>
                  )}
                  {enableText && (
                    <motion.div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black xl:bg-transparent bg-opacity-80 xl:relative px-4" variants={pageVariant} initial="hidden" animate="visible" exit="remove" transition={{duration: 0.2, staggerChildren: 0.3}}>
                      <TextGenerateContainer
                          setEnableText={setEnableText}
                          setTextGenerate={setTextGenerate}
                          handleGenerateButton={handleGenerateButton}
                          textGenerate={textGenerate}
                          isGenerating={isGenerating}
                        />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="playgroudContentContainer w-full mt-72 xs2:mt-52 lg:mt-36 mb-48 flex flex-col items-center rounded-[20px] mx-1 xs2:mx-8"
              >
                {generatedImage ? (
                  <img className="generated-img" src={URL.createObjectURL(generatedImage)} alt="Website generated" />
                ) : (
                  <DetailContainer
                    textGenerate={textGenerate}
                    setTextGenerate={setTextGenerate}
                    isGenerating={isGenerating}
                    clearInput={clearInput}
                    submit={handleGenerateButton}
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
                screenSize={screenSize}
                solution={solution}
              />
            </motion.div>
          <ToastContainer />
        </motion.div>
      </motion.div>
    </PageTransition>
  );
};

export default Playground;
