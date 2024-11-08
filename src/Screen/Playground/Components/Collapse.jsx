import { Collapse } from "antd";
import "./style.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useMemo } from "react";
import { EditorContainer } from "../../../CommonComponent";
const CollapseContainer = ({
  setEnableCollapse,
  img,
  searchText,
  screenSize,
}) => {
  const title = useMemo(() => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <p style={{ color: "#CB24E0" }}>{"</>"}</p>
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
        style={{
          marginLeft: screenSize.size > 1024 ? "5rem" : "0.5rem",
          marginRight: screenSize.size > 1024 ? "5rem" : "0.5rem",
          background: "#1B1B1B",
          border: "1px solid #1B1B1B",
        }}
        className="custom customContainer customContainer2"
        items={items}
        defaultActiveKey={["1"]}
        onChange={() => setEnableCollapse(false)}
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <span
            style={{
              color: isActive ? "white" : "#9d9d9d",
            }}
          >
            {isActive ? (
              <MdKeyboardArrowDown size={24} color="white" />
            ) : (
              <MdKeyboardArrowUp size={24} color="white" />
            )}
          </span>
        )}
      />
      ;
    </>
  );
};

export default CollapseContainer;
