import { Collapse } from "antd";
import { CgClose } from "react-icons/cg";
import "./style.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";
import { EditorContainer } from "../../../CommonComponent";
import { ReactComponent as CodeBlockPurple } from "../../../assests/icons/code-block-purple.svg"

const CollapseContainer = ({
  enableCollapse,
  setEnableCollapse,
  img,
  screenSize,
  solution
}) => {
  const [activeKey, setActiveKey] = useState(0)
  const [display, setDisplay] = useState("mini")

  const title = useMemo(() => {
    return (
      <div className="header-text" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <CodeBlockPurple />
        <p>Code Editor</p>
      </div>
    );
  }, []);
  const items = [
    {
      key: "1",
      label: title,
      children: <EditorContainer solution={solution} />,
    },
  ];

  useEffect(() => {
    if (enableCollapse) {
      setActiveKey(1)
    } else {
      setActiveKey(0)
    }
  }, [enableCollapse])

  const handleShowing = (action) => {
    if (action === "up" && !enableCollapse) {
      setDisplay("mini")
      setEnableCollapse(true)
    } else if (action === "up" && enableCollapse) {
      setDisplay("fullscreen")
    } else if (action === "down") {
      setEnableCollapse(false)
    }
  }

  return (
    <div className={`playgroundFooterContainer z-50 ${enableCollapse ? "" : "is-collapsed"} ${display}`}>
      <Collapse
        className="mx-3 custom collapse-container md:mx-5"
        items={items}
        // defaultActiveKey={["1"]}
        activeKey={activeKey}
        // onChange={() => setEnableCollapse(false)}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <div className="collapseExpand">
              <button onClick={() => handleShowing("up")}>
                  <MdKeyboardArrowUp size={32} color="white" />
              </button>
              {
                isActive ? (
                  <>
                    <button onClick={() => handleShowing("down")}>
                        <MdKeyboardArrowDown size={32} color="white" />
                    </button>
                  </>
                ) : ""
              }

              {
                !enableCollapse ? (
                  <button>
                    <CgClose
                      color="#939393"
                      size={24}
                    />
                  </button>
                ) : ""
              }
          </div>
        )}
      />
      ;
    </div>
  );
};

export default CollapseContainer;
