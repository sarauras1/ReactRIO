import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import {ReactComponent as ShoppingCard} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
export default function CartIcon(){
    const {toggle, setToggle, cartItems} = useContext(CartContext)
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
   
    return(
        <Fragment>
            <div className="cart-icon-container" onClick={toggle? () => setToggle(false) : () => setToggle(true)}>
            <ShoppingCard className="shopping-icon"/>
            <span className="item-count">{totalQuantity}</span>            
            </div>
        </Fragment>
    )
}