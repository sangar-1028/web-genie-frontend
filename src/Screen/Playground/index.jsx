import React, { useEffect, useState } from "react";
import Modal from "antd/es/modal/Modal";
import { calculateSize } from "../../utilies/constantFuntion";
import "./style.scss";
import { CgClose } from "react-icons/cg";
import { Divider } from "antd";
import {  DetailContainer, MenuContainer } from "./Components";
const Playground = ({ modalOpen, onClose }) => {
  const [screenSize, setScreenSize] = useState({
    width: calculateSize(window.innerWidth),
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: calculateSize(window.innerWidth),
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Modal
      title="Playground"
      visible={modalOpen}
      footer={null}
      onCancel={onClose}
      width={screenSize.width}
      className="custom-modal custom-modal-title"
      closeIcon={<CgClose color="#939393" size={24} />}
    >
      <>
        <Divider style={{ borderColor: "#939393" }} />
        <div className="playgroundContainer">
          <div className="playgroudMenuContainer">
            <MenuContainer screenSize={screenSize} />
          </div>
          <div className="playgroudContentContainer">
            <DetailContainer />
          </div>
          <div className="playgroudSizeContainer"> sara</div>
        </div>
      </>
    </Modal>
  );
};

export default Playground;
