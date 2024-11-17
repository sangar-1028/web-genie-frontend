import React, { useEffect, useRef } from "react";
import "./style.scss";
import { BiCopy, BiDownload } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Icon } from "../../assests/images/constant";
import { toast, ToastContainer } from "react-toastify";
import Editor from '@monaco-editor/react';


const HeaderContainer = ({title, ext, codeText, action}) => {
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

function CodeEditor({ parentId, value, ...props }) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  // useEffect(() => {
  //   const parent = document.getElementById('editor-parent-1')
  //   console.log(parent)
  //   window.addEventListener('resize', () => {
  //     console.log("Resizing")
  //     // make editor as small as possible
  //     editorRef.current.layout({ width: 0, height: 0 })

  //     // wait for next frame to ensure last layout finished
  //     window.requestAnimationFrame(() => {
  //       // get the parent dimensions and re-layout the editor
  //       const rect = parent.getBoundingClientRect()
  //       editorRef.current.layout({ width: rect.width, height: rect.height })
  //     })
  //   })
  // }, [])

  return (<Editor
    width="100%"
    height="100%"
    defaultLanguage="javascript"
    defaultValue={value}
    onMount={handleEditorDidMount}
    theme="vs-dark"
    options={{
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: false,
      automaticLayout: true
    }}
    {...props}
  />)
}

const EditorContainer = ({ uploadedImg, searchText }) => {
  const codeText = `import ‘package:flutter/material.dart’; 
import ‘package:google_fonts/google_fonts.dart; 
import ‘package:solar_system/scenes/home_scene.dart’; 
class App extends SatelessWidget { 
  const App({ 
    super.key, 
  });
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: ‘Solar System’,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
      primarySwatch: Colors.blue,
      textTheme: GoogleFonts.latoTextTheme(),`

  // const codeText =
  //   (` <p><span class="line-number">1</span> {"import React from 'react';"}</p>
  // <p><span class="line-number">2</span> {"const App = () => {"}</p>
  // <p><span class="line-number">3</span> {"  return ("}</p>
  // <p><span class="line-number">4</span> {"    <h1>Hello, world!</h1>"}</p>
  // <p><span class="line-number">5</span> {"  );"}</p>
  // <p><span class="line-number">6</span> {"};"}</p>
  // <p><span class="line-number">7</span> {"export default App;"}</p>
  //   `);

  const editorRef1 = useRef(null)
  const editorRef2 = useRef(null)

  return (
    <div className="editorContainer">
      <div className="CodePathContainer">
        <HeaderContainer title="HTML Code" ext="jsx" codeText={codeText} action="code" />
        <div id="editor-parent-1" className="editor-parent">
          <CodeEditor parentId="editor-parent-1" value={codeText} />
        </div>
      </div>
      <div className="CSSPathContainer">
        <HeaderContainer title="CSS Code" ext="css" codeText={codeText} action="css" />
        <div id="editor-parent-2" className="editor-parent">
          <CodeEditor parentId="editor-parent-2" value={codeText} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditorContainer;
