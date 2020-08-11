import React, { Component } from "react";
import "./header.styles.scss";
import whiteCart from "../../images/cartWhite.png";
import pinkCart from "../../images/cartPink.png";
import greenCart from "../../images/cartGreen.png";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "../logo/logo.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

class Header extends Component {
  scrollToPlants() {
    scroller.scrollTo("plants", {
      smooth: true,
      duration: 500,
      spy: true,
    });
  }

  scrollToContact() {
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
      spy: true,
    });
  }

  scrollToHome() {
    scroller.scrollTo("home", {
      smooth: true,
      duration: 500,
      spy: true,
    });
  }

  scrollToCart() {
    scroller.scrollTo("cart", {
      smooth: true,
      duration: 500,
      spy: true,
    });
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="header">
        <Link className="logo-container">
          <Logo small className="logo" />
        </Link>
        <div className="header-links">
          <Link className="header-link">Home</Link>
          <Link className="header-link">Plants</Link>
          <Link className="header-link">Contact</Link>
          <div className="header-link">
            {currentUser ? (
              <div className="header-link" onClick={() => auth.signOut()}>
                Sign out
              </div>
            ) : (
              <Link className="header-link" to="/signin">
                Sign in
              </Link>
            )}
          </div>
          <Link className="header-link">
            <img className="cart-icon" src={whiteCart} alt="cart"></img>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
