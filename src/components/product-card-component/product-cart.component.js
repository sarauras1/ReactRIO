import { Fragment, useContext } from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/Cart.context";

export default function ProductCard({ products }) {
  const { name, price, imageUrl } = products;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(products);
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
