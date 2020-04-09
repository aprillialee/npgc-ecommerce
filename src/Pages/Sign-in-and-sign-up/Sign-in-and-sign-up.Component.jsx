import React from "react";

import SignIn from "../../Components/Sign-In/Sign-In.Component";
import SignUp from "../../Components/Sign-Up/Sign-Up.Component";

import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
