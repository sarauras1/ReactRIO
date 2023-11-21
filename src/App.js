import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Fragment, useEffect } from "react";
import Shop from "./routes/shop/shop.component"
import SignIn from "./routes/Auth/auth.component";
import CheckoutPage from "./routes/checkout-page/checkout-page";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocFromAuthForm,
} from './utils/firebase/firebase.utils';
import { setCurrentUser } from './app/user/user-reducer';
export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuthForm(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop/>}/>
          <Route path="/auth" element={<SignIn/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Route>
      </Routes>
    </Fragment>
  );
}
