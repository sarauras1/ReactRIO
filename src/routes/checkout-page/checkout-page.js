import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import "./checkout.styles.scss"

export default function CheckoutPage(){
    const {cartItems} = useContext(CartContext)
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
return (
    <Fragment>
    
      <div className="checkout-container">

        <div className="checkout-header">
            <div className="header-block">
             <span>Product</span>
            </div>
            <div className="header-block">
             <span>Name</span>
            </div>
            <div className="header-block">
             <span>Quantity</span>
            </div>
            <div className="header-block">
             <span>Price</span>
            </div>
            <div className="header-block">
             <span>Remove</span>
            </div>
        </div>
        {
         cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItems={cartItem}/>)
        }
        <div className="total"><span>Total {total}</span></div>
        <PaymentForm/>
      </div>
       
   
    </Fragment>
)
}