import React, { Component } from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { toggleIsSignIn } from "../../redux/sign-in-and-sign-up/sign-in-and-sign-up.actions";
import { connect } from "react-redux";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { toggleIsSignIn } = this.props;

    return (
      <form className="sign-in" onSubmit={this.handleSubmit}>
        <label className="title">Sign in</label>
        <label className="email">Email address</label>
        <input
          className="email-input"
          type="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          placeholder="Enter email"
        />
        <label className="password">Password</label>
        <input
          className="password-input"
          type="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          placeholder="Password"
        />
        <div className="buttons-container">
          {" "}
          <CustomButton
            type="button"
            onClick={toggleIsSignIn}
            inverted
            children={"Sign up"}
          />
          <CustomButton type="submit" children={"Sign in"} />
          <CustomButton
            type="button"
            onClick={signInWithGoogle}
            isGoogleSignIn
            children={"Sign in with Google"}
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleIsSignIn: () => dispatch(toggleIsSignIn()),
});

export default connect(null, mapDispatchToProps)(SignIn);
