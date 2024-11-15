import React, { useState } from "react";
import "./style.scss";
import { ButtonField } from "../../CommonComponent";
import { Icon } from "../../assests/images/constant";
import { useNavigate } from "react-router-dom";
import {ReactComponent as StarsIllustration} from "../../assests/icons/stars.svg"
import {ReactComponent as RaysIllustration} from "../../assests/icons/rays.svg"
import {ReactComponent as Line3} from "../../assests/icons/line-3.svg"
import Playground from "../../Screen/Playground";
import { motion } from "framer-motion"

const Header = () => {
  const [openPlayground, setOpenPlayground] = useState(false);

 const navigate = useNavigate()
  return (
    <>
      <div className={`header ${openPlayground ? "playground-open" : ""}`}>
        <motion.div className="headerContainer" initial={{ opacity: 0, y: -70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1, ease: "circInOut" }}>
          <div className="headerLogo">
            <img src={Icon.logo} alt="logo style" />
          </div>
          <ButtonField
            buttonStyle={"buttonStyle"}
            onClick={() => setOpenPlayground(true)}
          >
            Use playground
            <Line3 className="line-1" />
          </ButtonField>
        </motion.div>
        <StarsIllustration className="stars-illustration" />
        <RaysIllustration className="rays-illustration" />
      </div>

      {
        openPlayground ? <Playground onClose={() => setOpenPlayground(false)} /> : ""
      }

    </>
  );
};

export default Header;
