import React from "react";
import "./style.scss";
import { LiaPenNibSolid } from "react-icons/lia";
import { ReactComponent as LightningBolt } from "../../assests/icons/lightning.svg";
import { motion } from "framer-motion"

function Feature({icon, title, desc}) {
  const individual = {
    visible: {
      opacity: 1,
      // y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5,
        // ease: "backIn"
      }
    },
    hidden: {
      opacity: 0,
      // y: 5,
      transition: {
        when: "afterChildren"
      }
    }
  }

  const content = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    },
    hidden: {
      opacity: 0,
      y: 5
    }
  }

  return (
    <motion.div className="thirdBoxContainer" variants={individual} initial="hidden" whileInView="visible">
      <motion.div className="thirdIconBox" variants={content}>
        {icon}
      </motion.div>

      <motion.div className="thirdTextBox" variants={content}>{ title }</motion.div>

      <motion.div className="thirdSubTextBox" variants={content}>
        {desc}
      </motion.div>
    </motion.div>
  )
}

const ThirdContainer = () => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.4
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  }

  return (
    <motion.div className="thirdContainer" variants={variants} initial="hidden" animate="visible" viewport={{ once: true }}>
      <Feature icon={<LiaPenNibSolid size={"24px"} color="#D11CE9" />} title="Pixel-Perfect Accuracy" desc="Our AI aligns code with design, minimizing developer-designer back-and-forth." />
      <Feature icon={<LiaPenNibSolid size={"24px"} color="#D11CE9" />} title="Clean, Semantic Code" desc="Use clean, semantic HTML and optimized CSS. Keep code lean and avoid unnecessary divs." />
      <Feature icon={<LightningBolt size={"24px"} color="#D11CE9" />} title="Instant Generation" desc="Turn designs into production-ready code in seconds. What took hours now happens instantly." />
    </motion.div>
  );
};

export default ThirdContainer;
