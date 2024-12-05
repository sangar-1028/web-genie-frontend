import React, { useEffect, useRef, useState } from "react";
import { BiCopy, BiDownload } from "react-icons/bi";
import { toast } from "react-toastify";
import Editor from "@monaco-editor/react";
import "./style.scss";

const HeaderContainer = ({
  currentTab,
  ext,
  codeText,
  onTabChange,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
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

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([codeText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `code.${ext}`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="editorHeaderContainer">
      <div className="flex items-center gap-4">
        {["html", "css"].map((tab) => (
          <button
            key={tab}
            className={`headerText ${
              currentTab === tab ? "!text-purple-300" : ""
            }`}
            onClick={() => onTabChange(tab)}
            disabled={currentTab === tab}
          >
            {tab === "html" ? "HTML" : "CSS"}
          </button>
        ))}
      </div>
      <div className="actionConatiner">
        <div className="headerItem" onClick={handleDownload}>
          <BiDownload size={18} color="#939393" />
        </div>
        <div className="headerItem" onClick={handleCopy}>
          <BiCopy size={18} color="#939393" />
        </div>
      </div>
    </div>
  );
};

const CodeEditor = ({ parentId, value, ...props }) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <Editor
      width="100%"
      height="100%"
      value={value}
      onMount={handleEditorDidMount}
      theme="vs-dark"
      options={{
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        automaticLayout: true,
      }}
      defaultLanguage="html"
      {...props}
    />
  );
};

const EditorContainer = ({ solution, isCodeDeleted, setIsCodeDeleted }) => {
  const iframeRef = useRef(null);

  const [editorState, setEditorState] = useState({
    currentTab: "html",
    html: { type: "html", title: "HTML Code", code: "", action: "code" },
    css: { type: "css", title: "CSS Code", code: "", action: "css" },
  });

  useEffect(() => {
    setEditorState((prevState) => ({
      ...prevState,
      html: { ...prevState.html, code: solution?.html || "" },
      css: { ...prevState.css, code: solution?.css || "" },
    }));
    setIsCodeDeleted(false)
  }, [solution, setIsCodeDeleted]);

  useEffect(() => {
    if (isCodeDeleted) {
      setEditorState((prevState) => ({
        ...prevState,
        html: { ...prevState.html, code: "" },
        css: { ...prevState.css, code: "" },
      }));
    }
  }, [isCodeDeleted]);

  useEffect(() => {
    if (iframeRef.current) {
      const preview = `
        <!DOCTYPE html>
        <html lang="en">
          <head><style>${editorState.css.code}</style></head>
          <body>${editorState.html.code}</body>
        </html>`;
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(preview);
        iframeDocument.close();
      }
    }
  }, [editorState.html.code, editorState.css.code]);

  const handleTabChange = (type) => {
    setEditorState((prevState) => ({ ...prevState, currentTab: type }));
  };

  const handleEditorChange = (code) => {
    setEditorState((prevState) => ({
      ...prevState,
      [prevState.currentTab]: { ...prevState[prevState.currentTab], code },
    }));
  };

  return (
    <div className="editorContainer">
      <div className="CodePathContainer code-container">
        <HeaderContainer
          ext={editorState[editorState.currentTab].type}
          codeText={editorState[editorState.currentTab].code}
          currentTab={editorState.currentTab}
          onTabChange={handleTabChange}
        />
        <div
          id={`editor-parent-${editorState.currentTab}`}
          className="editor-parent"
        >
          <CodeEditor
            parentId={`editor-parent-${editorState.currentTab}`}
            value={editorState[editorState.currentTab].code || ""}
            language={editorState[editorState.currentTab].type || "html"}
            onChange={handleEditorChange}
          />
        </div>
      </div>
      <div className="CSSPathContainer code-container overflow-hidden">
        <div className="editorHeaderContainer">
          <span className="headerText">Preview</span>
        </div>
        <iframe
          ref={iframeRef}
          title="Live Preview"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "white",
          }}
        />
      </div>
    </div>
  );
};

export default EditorContainer;