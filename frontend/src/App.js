import Footer from "./components/layout/footer/Footer.jsx";
import Header from "./components/layout/header/Header.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/shopPage/ShopPage.jsx";
import ProductDetails from "./components/product/ProductDetails.jsx"
import "./App.scss"
// import Search from "./components/product/search/Search.jsx";
import Login from "./pages/LoginSignup/Login.jsx"
// import { useSelector } from "react-redux";
import { loadUser } from "./actions/userAction.js";
// import UserOptions from "./components/layout/header/UserOptions/UserOptions.jsx"
import { useSelector } from "react-redux";
import store from "./store"
import { useEffect } from "react";
import Profile from "./pages/Profile/Profile.jsx";
// import ProtectedRoute from "./components/route/ProtectedRoute.js";
import UpdateProfile from "./pages/updateProfile/UpdateProfile.jsx";
import UpdatePassword from "./pages/updatePassword/UpdatePassword.jsx";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword.jsx"
import ResetPassword from "./pages/resetPassword/ResetPassword.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Shipping from "./pages/shipping/Shipping.jsx";
import ConfirmOrder from "./pages/confirmOrder/ConfirmOrder.jsx";
// import axios from "axios";
// import { useState } from "react";
// import Payment from "./pages/payment/Payment.jsx";
// import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess.jsx"
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
    // getStripeApiKey();
  }, [])

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  //   console.log(stripeApiKey);

  // }

  const { loading, isAuthenticated } = useSelector((state) => state.user);


  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products/:keyword" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        {/* <ProtectedRoute exact path="/account" component={Profile} /> */}
        {!loading && isAuthenticated && <Route path="/account" element={<Profile />} />}
        {!loading && isAuthenticated && <Route path="/me/update" element={<UpdateProfile />} />}
        {!loading && isAuthenticated && <Route path="/password/update" element={<UpdatePassword />} />}
        {!loading && isAuthenticated && <Route path="/cart" element={<Cart />} />}
        {!loading && isAuthenticated && <Route path="/shipping" element={<Shipping />} />}
        {!loading && isAuthenticated && <Route path="/order/confirm" element={<ConfirmOrder />} />}
        {!loading && <Route path="/password/forgot" element={<ForgotPassword />} />}
        {!loading && <Route path="/password/reset/:token" element={<ResetPassword />} />}
        {/* {stripeApiKey && (
          <Route
            path="/payment/process"
            element={(
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            )}
          />
        )} */}
        {/* {!loading && <Route path="/payment/process" element={<Payment />} />} */}
        {/* {!loading && <Route path="/payment/success" element={<PaymentSuccess />} />} */}


      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
