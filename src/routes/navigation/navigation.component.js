import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from '../../app/user/user-selector';
import { selectIsCartOpen } from '../../app/cart/cart-selector';

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  console.log(currentUser)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link as='span' onClick={SignOutUser} className="nav-link">
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
