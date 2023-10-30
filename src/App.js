import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Fragment } from "react";
import Shop from "./routes/shop/shop.component"
import SignIn from "./routes/Auth/auth.component";
import CheckoutPage from "./routes/checkout-page/checkout-page";

export default function App() {
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
