import { Fragment } from "react";
import "./cart-item.styles.scss";

export default function CartItem({ cartItems }) {
  const { name, imageUrl, quantity, price } = cartItems;
  return (
    <Fragment>
      <div className="cart-item-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity}x ${price}
          </span>
        </div>
      </div>
    </Fragment>
  );
}
