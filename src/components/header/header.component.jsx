import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Logo from "../logo/logo.component";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

class Header extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo small white className="logo" />
        </Link>
        <div></div>
        <div className="header-links">
          <Link className="header-link" to="/">
            Home
          </Link>
          <Link className="header-link" to="/shop">
            Shop
          </Link>
          <Link className="header-link" to="/contact">
            Contact
          </Link>
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
          <Link className="header-link" to="/cart">
            <div id="cart" className="cart" alt="cart"></div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(Header);
