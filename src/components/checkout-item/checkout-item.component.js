import { Fragment } from "react";
import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../app/cart/cart-reducer";

export default function CheckoutItem({ cartItems }) {
  const { name, imageUrl, quantity, price } = cartItems;

  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems));
  const addItemHandler = () => dispatch(addItemToCart(cartItems));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems));
  return (
    <Fragment>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>

        <span className="name">{name}</span>
        <div className="quantity">
          <div className="arrow" onClick={clearItemHandler}>
            &#60;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={addItemHandler}>
            &#62;
          </div>
        </div>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={removeItemHandler}>
          &#10005;
        </div>
      </div>
    </Fragment>
  );
}
