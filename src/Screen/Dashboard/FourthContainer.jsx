import React, { useState } from "react";
import "./style.scss";
import { Icon } from "../../assests/images/constant";
import { ReactComponent as Ellipse1 } from "../../assests/icons/ellipse-1.svg";
import { ReactComponent as Ellipse2 } from "../../assests/icons/ellipse-2.svg";

const FourthContainer = () => {
  const [selectPhase, setSelectPhase] = useState("phase1");
  const itemArray = [
    {
      key: "phase1",
      icon: Icon.EditText,
      Title: "Phase 1",
      subTitle: "Generate HTML/CSS projects from text prompts.",
    },
    {
      key: "phase2",
      icon: Icon.ImageUploader,
      Title: "Phase 2",
      subTitle: "Generate HTML/CSS projects from image based prompts.",
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

  const boxItem = (item) => {
    return (
      <div
        key={item.key}
        className={`boxItem ${
          selectPhase === item.key ? "boxItemFilled" : "boxItemUnfilled"
        }`}
        onClick={() => setSelectPhase(item.key)}
      >
        <div className="timeline">
          <div className="circle">
            <div className="inner-circle"></div>
          </div>
        </div>
        <img src={item.icon} alt="edit icon" width={32} height={32} />
        <div className="boxItemText">{item.Title}</div>
        <div className="boxItemSubText">{item.subTitle}</div>
      </div>
    );
  };
  return (
    <div className="secondContainer">
      <Ellipse1 className="ellipse-1" />
      <Ellipse2 className="ellipse-2" />
      <div className="seoondHeader">The roadmap of magic</div>
      <div className="fourthSubHeader">
        The Evolution of <span className="subtext-span">Webgenie</span>
      </div>
      <div className="fourthSubText">
        Discover our plans to continuously expand the power of design-to-code
        automation.
      </div>

      <div className="boxItemsContainer">
        {itemArray.map((item) => {
          return boxItem(item);
        })}
      </div>
    </div>
  );
};

export default FourthContainer;
