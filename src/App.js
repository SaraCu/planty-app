import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import Switch from "react-bootstrap/esm/Switch";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import HomePage from "./pages/home/home.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { bodyColor } = this.props;
    switch (bodyColor) {
      case "green":
        document.body.style = "background: #e9f7bc;";
        break;
      case "blue":
        document.body.style = "background: #e9f7bc;";
        break;
      case "yellow":
        document.body.style = "background: #fbffb0;";
        break;
      default:
        document.body.style = "background: #fbffb0;";
        break;
    }
    document.body.style = "background: #e9f7bc;";

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
