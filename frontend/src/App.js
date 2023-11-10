import Footer from "./components/layout/footer/Footer.jsx";
import Header from "./components/layout/header/Header.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/shopPage/ShopPage.jsx";
import ProductDetails from "./components/product/ProductDetails.jsx"
import "./App.scss"
// import Search from "./components/product/search/Search.jsx";
import Login from "./pages/LoginSignup/Login.jsx"

function App() {
  

  return (

    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/products/:keyword" element={<Shop/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>

      <Footer/>
    </BrowserRouter>

  );
}

export default App;
