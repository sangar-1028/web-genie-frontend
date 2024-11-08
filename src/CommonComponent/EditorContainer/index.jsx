import React from "react";
import "./style.scss";
import { BiCopy, BiDownload } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Icon } from "../../assests/images/constant";
import { toast, ToastContainer } from "react-toastify";
const EditorContainer = ({ uploadedImg, searchText }) => {
  const codeText =
    (` <p><span class="line-number">1</span> {"import React from 'react';"}</p>
  <p><span class="line-number">2</span> {"const App = () => {"}</p>
  <p><span class="line-number">3</span> {"  return ("}</p>
  <p><span class="line-number">4</span> {"    <h1>Hello, world!</h1>"}</p>
  <p><span class="line-number">5</span> {"  );"}</p>
  <p><span class="line-number">6</span> {"};"}</p>
  <p><span class="line-number">7</span> {"export default App;"}</p>
    `);

  const CodeBlock = () => (
    <div className="code-block">
      {codeText.split("\n").map((line, index) => (
        <p key={index}>
          <span className="line-number">{index + 1}</span> {line}
        </p>
      ))}
    </div>
  );

  const handleGenerateError = () => {
    toast.info("Code Copied", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const onHandleCopy = () => {
    navigator.clipboard.writeText(codeText);
    handleGenerateError();
  };

  const onHandleDownload = (ext) => {
    const element = document.createElement("a");
    const file = new Blob([codeText], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `code.${ext}`;
    document.body.appendChild(element);
    element.click();
  };
  const HeaderContainer = (title, ext, action) => {
    return (
      <div className="editorHeaderContainer">
        <p className="headerText">{title}</p>
        <div className="actionConatiner">
          <div className="actionSelectionContainer">
            <div>
              <img src={Icon.ReactColorVector} alt="react icon"/>
            </div>

            <p className="actionText"> React</p>
            <div>
              <MdKeyboardArrowDown
                size={24}
                color="white"
                style={{ marginTop: "2px" }}
              />
            </div>
          </div>

          <div className="headerItem" onClick={() => onHandleDownload(ext)}>
            <BiDownload size={18} color="#939393" />
          </div>
          <div className="headerItem" onClick={() => onHandleCopy()}>
            <BiCopy size={18} color="#939393" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="editorContainer">
      <div className="CodePathContainer">
        {HeaderContainer("HTML Code", "jsx", "code")}
        {uploadedImg || searchText ? CodeBlock() : null}
      </div>
      <div className="CSSPathContainer">
        {HeaderContainer("CSS Code", "css", "css")}
        {uploadedImg || searchText ? CodeBlock() : null}
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditorContainer;
