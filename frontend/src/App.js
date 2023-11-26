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

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])



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

      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
