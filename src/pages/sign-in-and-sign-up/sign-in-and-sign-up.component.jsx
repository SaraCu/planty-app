import React from "react";
import "./sign-in-and-sign-up.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { selectIsSignIn } from "../../redux/sign-in-and-sign-up/sign-in-and-sign-up.selectors";
import Logo from "../../components/logo/logo.component";

const SignInAndSignUpPage = ({ isSignIn }) => {
  document.body.style = "background: #fbffb0;";
  return (
    <div className="sign-in-and-sign-up-page">
      <div className="container">
        <Logo />
        <div className="form">{isSignIn ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSignIn: selectIsSignIn,
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
