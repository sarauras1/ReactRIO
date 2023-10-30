import { Fragment, useContext } from "react";
import { CartContext} from "../../contexts/Cart.context";
import "./checkout-item.styles.scss"


export default function CheckoutItem({ cartItems }) {
  const { name, imageUrl, quantity, price } = cartItems;
  const { addItemToCart, removeItem, deleteItem } = useContext(CartContext);

   const addProduct = () => addItemToCart(cartItems);
   const removeProduct = () => removeItem(cartItems);
   const deleteProduct = () => deleteItem(cartItems)
  return (
    <Fragment>
      <div className="checkout-item-container">
        <div className="image-container">

        <img src={imageUrl} alt={`${name}`} />
        </div>
       
       <span className="name">{name}</span>
       <div className="quantity">
       <div className="arrow" onClick={removeProduct}>&#60;</div>
       <span className="value">{quantity}</span>
       <div className="arrow" onClick={addProduct}>&#62;</div>
       </div>
      
       
       <span className="price">{price}</span>
       <div className="remove-button" onClick={deleteProduct}>&#10005;</div>
      </div>
    </Fragment>
  );
}
