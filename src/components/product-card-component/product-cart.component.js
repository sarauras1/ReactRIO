import { Fragment } from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../app/cart/cart-reducer";

export default function ProductCard({ products }) {
  const { name, price, imageUrl } = products;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(products));

  return (
    <Fragment>
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <Button onClick={addProductToCart} buttonType="inverted">
          Add to card
        </Button>
        <footer className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </footer>
      </div>
    </Fragment>
  );
}
