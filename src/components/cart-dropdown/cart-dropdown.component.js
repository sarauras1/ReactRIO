import { Fragment } from "react";
import { useSelector } from "react-redux";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../app/cart/cart-selector";

export default function CartDropdown() {
 const cartItems = useSelector(selectCartItems);
 const navigate = useNavigate();

 const goToCheckoutHandler = () => {
   navigate('/checkout');
 };
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
        
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
         
        </div>
      </div>
    </Fragment>
  );
}
