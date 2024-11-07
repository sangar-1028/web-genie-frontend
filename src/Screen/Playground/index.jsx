import React, { useEffect, useState } from "react";
import { calculateSize } from "../../utilies/constantFuntion";
import "./style.scss";
import { CgClose } from "react-icons/cg";

import { DetailContainer, MenuContainer, RotateContainer } from "./Components";
import { useNavigate } from "react-router-dom";
const Playground = () => {

 const navigate = useNavigate()

  const [screenSize, setScreenSize] = useState({
    width: calculateSize(window.innerWidth),
    height: window.innerHeight,
    size: window.innerWidth,
  });


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
    <div className="playgroundModal">
      <div className="playgroundHeader">
      <div className="PlaygroundTitle">
        Playground
        </div>
         <CgClose color="#939393" size={24} onClick={() => navigate("/dashboard")}/>
        </div>
      
      <div className="playgroundContainer">
        <div className="playgroudMenuContainer">
          <MenuContainer screenSize={screenSize} />
        </div>
        <div className="playgroudContentContainer">
          <DetailContainer />
        </div>
        {screenSize.size > 1024 && (
          <div className="playgroudSizeContainer">
            <RotateContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Playground;
