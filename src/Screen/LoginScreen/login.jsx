import React from "react";
import "./style.scss";
import { ButtonField, InputField } from "../../CommonComponent";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Divider } from "antd";
const LoginScreen = () => {
  const onClickGoogle = () => {
    console.log("google");
  }

  const onClickGitHub = () => {
    console.log("github");
  }

  return (
    <div className="mainContainer">
      <div className="loginContainer">
        <div className="halfBox detailBox">
          <p className="heading">Join Chat Room!</p>
          <p className="subHeading">
            Sign up to unleash more AI-powered coding magic
          </p>
          <div className="buttonContainer">
            <ButtonField text="Google" buttonStyle={{width: "100%", marginRight: "2rem"  }} onClick={onClickGoogle} icon={<FcGoogle/>} iconPosition={"start"}/>
            <ButtonField text="Git hub" buttonStyle={{width: "100%" }} onClick={onClickGitHub} icon={<IoLogoGithub />} iconPosition={"start"}/>
          </div>
          <Divider>Or</Divider>
          <InputField placeholder="Email" inputLabel="Email" styleBox={{height: '32px', marginTop: '0.5rem'}}/>
          <InputField placeholder="Password" inputLabel="Password" type={"password"} styleBox={{height: '32px', marginTop: '0.5rem'}}/>
          <ButtonField text="Login" buttonStyle={{width: "100%", marginTop: ".5rem", height: "48px",  backgroundColor: "black", color: "white"}}/>
        </div>

        <div className="halfBox imageBox">
          <p className="subImageHeading">Build the Web with Plugins</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
