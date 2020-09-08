import React from "react";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import "./cart.styles.scss";
import { Link } from "react-router-dom";
import plants from "../../images/Plants2.svg";
import { Row, Col } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

const Cart = ({ items }) => {
  const isCartEmpy = !items.length;
  const title = isCartEmpy ? "Your cart is empty." : "Your cart";
  let total = 0;
  items.forEach((el) => {
    total += el.price * el.quantity;
  });
  return (
    <div className="cart">
      <h2 className="cart-title">{title}</h2>
      {isCartEmpy ? (
        <div className="cart-empty-container">
          <img
            className="cart-empty-img"
            src={plants}
            alt="plant ilustration"
          ></img>

          <h3 className="cart-empty-text">
            Go to{" "}
            <Link className="link" to="/shop">
              Shop
            </Link>
          </h3>
        </div>
      ) : null}
      <div className="container">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {isCartEmpy ? null : (
        <Row className="totals-row">
          <Col>
            <div className="totals">
              <span className="total">Total: </span> {total.toFixed(2)}{" "}
              &euro;&nbsp;&nbsp;&nbsp;&nbsp; &bull; &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="total">Proceed to payment</span>
              <button className="proceed">
                {" "}
                <Check width="1.5em" height="1.5em" className="bi bi-x"></Check>
              </button>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default connect(mapStateToProps, null)(Cart);
