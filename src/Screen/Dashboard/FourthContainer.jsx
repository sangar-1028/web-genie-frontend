import React, { useState, useMemo } from "react";
import "./style.scss";
import { Icon } from "../../assests/images/constant";
import { motion } from "framer-motion"

const content = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  hidden: {
    opacity: 0,
    y: 10
  }
}

const BoxItem = ({ selectPhase, setSelectPhase, item }) => {
  const animate = useMemo(() => ({
    visible: {
      opacity: 1,
      scaleY: 1,
      originY: 0,
      transition: {
        // ease: "linear",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    hidden: {
      opacity: 0,
      scaleY: 0,
      originY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.5, 
        staggerDirection: -1
      }
    },
    hover: {
      border: selectPhase === item.key || item?.isActive ? "1px solid #d11ce9" : "1px solid #313131",
      background: selectPhase === item.key || item?.isActive ? "#d11ce933" : "rgba(0,0,0,0)",
      transition: {
        duration: 0.4
      }
    }
  }), [selectPhase, item.key, item?.isActive]);

  const circleAnims = useMemo(() => ({
    circle: {
      background: selectPhase === item.key || item?.isActive ? "rgba(209, 28, 233, 0.3)" : "rgba(72, 72, 72, 0.3)",
      border: selectPhase === item.key || item?.isActive ? "0.38px solid rgba(209, 28, 233, 1)" : "0.38px solid rgba(72, 72, 72, 1)",
      transition: {
        duration: 0.4
      }
    },
    innerCircle: {
      background: selectPhase === item.key || item?.isActive ? "rgba(209, 28, 233, 1)" : "rgba(72, 72, 72, 1)",
      transition: {
        duration: 0.4
      }
    }
  }), [selectPhase, item.key, item?.isActive]);

  return (
    <div
      className={`phase ${selectPhase === item.key || item?.isActive ? "phaseFilled" : "phaseUnfilled"}`}
      key={item.key}
      onMouseOver={() => setSelectPhase(item.key)}
      onMouseLeave={() => setSelectPhase("")}
    >
      <div className="hidden timeline xsm:block">
        <motion.div className="circle" variants={circleAnims} animate="circle">
          <motion.div className="inner-circle" variants={circleAnims} animate="innerCircle"></motion.div>
        </motion.div>
      </div>
      <motion.div 
        className={`boxItem`}
        // ${selectPhase === item.key ? "boxItemFilled" : "boxItemUnfilled"}
        variants={animate}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        animate="hover"
      >
        <motion.img src={item.icon} alt="edit icon" width={32} height={32} variants={content} />
        <motion.div className="boxItemText" variants={content}>{item.Title}</motion.div>
        <motion.div className="text-base font-normal boxItemSubText" variants={content}>{item.subTitle}</motion.div>
      </motion.div>
    </div>
  );
};

const itemArray = [
  {
    key: "phase1",
    icon: Icon.EditText,
    Title: "Phase 1",
    subTitle: "Generate HTML/CSS projects from text prompts.",
    isActive: true
  },
  {
    key: "phase2",
    icon: Icon.ImageUploader,
    Title: "Phase 2",
    subTitle: "Generate HTML/CSS projects from image based prompts.",
    isActive: false
  },
  {
    key: "phase3",
    icon: Icon.mic,
    Title: "Phase 3",
    subTitle: "Enable voice prompts for project generation.",
  },
  {
    key: "phase4",
    icon: Icon.figmaLogo,
    Title: "Phase 4",
    subTitle: "Integrate Figma designs as input for project generation.",
  },
  {
    key: "phase5",
    icon: Icon.folderDownload,
    Title: "Phase 5",
    subTitle: "Automate the downloading of fully functional project folders.",
  },
  {
    key: "phase6",
    icon: Icon.react,
    Title: "Phase 6",
    subTitle:
      "Expand to generate full framework-based projects like React, Angular, etc.",
  },
];

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6,
    }
  },
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      when: "afterChildren"
    }
  }
}

const timeline = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 3,
      duration: 1
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    }
  }
}

const FourthContainer = () => {
  const [selectPhase, setSelectPhase] = useState("phase1");

  return (
    <motion.div className="pt-28 mx-7 xsm:mx-14 secondContainer fourthContainer" variants={variants} initial="hidden" whileInView="visible">
      <motion.div className="seoondHeader" variants={variants}>The roadmap of magic</motion.div>
      <motion.div className="fourthSubHeader" variants={variants}>
        The Evolution of <span className="subtext-span">Webgenie</span>
      </motion.div>
      <motion.div className="fourthSubText mb-14 xsm:mb-20" variants={variants}>
        Discover our plans to continuously expand the power of design-to-code
        automation.
      </motion.div>

      <div className="boxItemsContainer w-full max-w-[720px] xsm:pl-12" variants={timeline} initial="hidden" whileInView="visible">
        {itemArray.map((item, index) => {
          return <BoxItem key={index} item={item} selectPhase={selectPhase} setSelectPhase={setSelectPhase} />;
        })}
      </div>
    </motion.div>
  );
};

export default FourthContainer;
