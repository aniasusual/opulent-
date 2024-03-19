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
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess.jsx"
import MyOrders from "./pages/Myorders/MyOrders.jsx";
import { Navigate } from "react-router-dom";
import OrderDetails from "./pages/orderDetails/OrderDetails.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import NewProduct from "./components/newProduct.js/NewProduct.js";
import UpdateProduct from "./components/updateProduct/UpdateProduct.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import OrderList from "./components/orderList/OrderList.jsx";
import ProcessOrder from "./components/processOrder/ProcessOrder.jsx";
import UsersList from "./components/userList/UsersList.jsx";
import UpdateUser from "./components/updateUser/UpdateUser.js";
import ProductReviews from "./components/productReviews/ProductReviews.jsx";

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
    // console.log(user.role)
  }, [])

  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  // const navigate = useNavigate();

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

        {!loading && <Route path="/account" element={!isAuthenticated ? <Navigate to="/login" /> : <Profile />} />}
        {!loading && <Route path="/me/update" element={!isAuthenticated ? <Navigate to="/login" /> : <UpdateProfile />} />}
        {!loading && <Route path="/password/update" element={!isAuthenticated ? <Navigate to="/login" /> : <UpdatePassword />} />}
        {!loading && <Route path="/cart" element={!isAuthenticated ? <Navigate to="/login" /> : <Cart />} />}
        {!loading && <Route path="/shipping" element={!isAuthenticated ? <Navigate to="/login" /> : <Shipping />} />}
        {!loading && <Route path="/order/confirm" element={!isAuthenticated ? <Navigate to="/login" /> : <ConfirmOrder />} />}
        {!loading && <Route path="/order/:id" element={!isAuthenticated ? <Navigate to="/login" /> : <OrderDetails />} />}
        {!loading && <Route path="/order/:id" element={!isAuthenticated ? <Navigate to="/login" /> : <Dashboard />} />}


        {!loading && <Route path="/admin/dashboard" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <Dashboard />} />}
        {!loading && <Route path="/admin/product" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <NewProduct />} />}
        {!loading && <Route path="/admin/product/:id" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <UpdateProduct />} />}
        {!loading && <Route path="/admin/products" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <ProductList />} />}
        {!loading && <Route path="/admin/orders" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <OrderList />} />}
        {!loading && <Route path="/admin/order/:id" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <ProcessOrder />} />}
        {!loading && <Route path="/admin/users" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <UsersList />} />}
        {!loading && <Route path="/admin/user/:id" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <UpdateUser />} />}
        {!loading && <Route path="/admin/reviews" element={!isAuthenticated && user && user.role !== "admin" ? <Navigate to="/" /> : <ProductReviews />} />}

        {/* <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        /> */}

        {!loading && <Route path="/password/forgot" element={<ForgotPassword />} />}
        {!loading && <Route path="/password/reset/:token" element={<ResetPassword />} />}
        {!loading && <Route path="/payment/success" element={<PaymentSuccess />} />}
        {!loading && <Route path="/orders" element={<MyOrders />} />}


      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
