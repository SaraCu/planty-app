import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { toggleIsSignIn } from "../../redux/sign-in-and-sign-up/sign-in-and-sign-up.actions";
import { connect } from "react-redux";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user);

      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { toggleIsSignIn } = this.props;

    return (
      <form className="sign-in" onSubmit={this.handleSubmit}>
        <label className="title">Sign up</label>
        <label className="email">Email address</label>
        <input
          className="email-input"
          type="email"
          name="email"
          onChange={this.handleChange}
          placeholder="Enter email"
        />
        <label className="password">Password</label>
        <input
          className="password-input"
          type="password"
          name="password"
          onChange={this.handleChange}
          placeholder="Password"
        />
        <label className="password">Confirm password</label>
        <input
          className="password-input"
          type="password"
          name="confirmPassword"
          onChange={this.handleChange}
          placeholder="Password"
        />
        <CustomButton
          type="button"
          onClick={toggleIsSignIn}
          inverted
          children={"Sign in"}
        />
        <CustomButton type="submit" children={"Sign up"} />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleIsSignIn: () => dispatch(toggleIsSignIn()),
});

export default connect(null, mapDispatchToProps)(SignUp);
