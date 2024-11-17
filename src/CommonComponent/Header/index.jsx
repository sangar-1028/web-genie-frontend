import React, { useState } from "react";
import "./style.scss";
import { ButtonField } from "../../CommonComponent";
import { Icon } from "../../assests/images/constant";
import { Link, useNavigate } from "react-router-dom";
import {ReactComponent as StarsIllustration} from "../../assests/icons/stars.svg"
import {ReactComponent as RaysIllustration} from "../../assests/icons/rays.svg"
import {ReactComponent as Line3} from "../../assests/icons/line-3.svg"
import Playground from "../../Screen/Playground";
import { motion } from "framer-motion"

const Header = () => {
  // const [openPlayground, setOpenPlayground] = useState(false);

 const navigate = useNavigate()
  return (
    <>
      <div className="xsm:p-5 md:p-10 header"> 
      {/* ${openPlayground ? "playground-open" : ""} */}
        <motion.div className="px-2.5 py-4 xsm:px-5 headerContainer" initial={{ opacity: 0, y: -70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1, ease: "circInOut" }}>
          <div className="w-32 xsm:w-40 xsm:h-12 headerLogo">
            <img src={Icon.logo} alt="logo style" />
          </div>
          <Link className="scale-95 xsm:scale-100" to="/playground">
            <ButtonField
              buttonStyle={"buttonStyle"}
              // onClick={() => setOpenPlayground(true)}
            >
              Use playground
              <Line3 className="line-1" />
            </ButtonField>
          </Link>
        </motion.div>
        <StarsIllustration className="stars-illustration" />
        <RaysIllustration className="rays-illustration" />
      </div>

      {/* {
        openPlayground ? <Playground onClose={() => setOpenPlayground(false)} /> : ""
      } */}

    </>
  );
};

export default Header;
