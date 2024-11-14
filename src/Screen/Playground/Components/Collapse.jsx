import { Collapse } from "antd";
import { CgClose } from "react-icons/cg";
import "./style.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useMemo } from "react";
import { EditorContainer } from "../../../CommonComponent";
import { ReactComponent as CodeBlockPurple } from "../../../assests/icons/code-block-purple.svg"

const CollapseContainer = ({
  setEnableCollapse,
  img,
  searchText,
  screenSize,
}) => {
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
      children: <EditorContainer uploadedImg={img} searchText={searchText} />,
    },
  ];
  return (
    <>
      <Collapse
        className="custom collapse-container"
        items={items}
        // defaultActiveKey={["1"]}
        activeKey={0}
        // onChange={() => setEnableCollapse(false)}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <div className="collapseExpand">
            <button>
              {isActive ? (
                <MdKeyboardArrowDown size={32} color="white" />
              ) : (
                <MdKeyboardArrowUp size={32} color="white" />
              )}
            </button>

            <button>
              <CgClose
                color="#939393"
                size={24}
              />
            </button>
          </div>
        )}
      />
      ;
    </>
  );
};

export default CollapseContainer;
