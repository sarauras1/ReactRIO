import { Fragment } from "react";
import {ReactComponent as ShoppingCard} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../app/cart/cart-selector';
import { setIsCartOpen } from '../../app/cart/cart-reducer';


export default function CartIcon(){
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
  
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
   
    return(
        <Fragment>
            <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingCard className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>            
            </div>
        </Fragment>
    )
}