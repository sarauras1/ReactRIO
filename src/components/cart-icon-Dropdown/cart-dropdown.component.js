import { Fragment, useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/Cart.context";
import CartItem from "../cart-item/cart-item";
import { Link } from "react-router-dom";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <Fragment>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItems={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
          <Link to="/checkout">
            <Button>CHECKOUT</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
