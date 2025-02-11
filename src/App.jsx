import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx";
import FQuestions from "./pages/FQuestions/FQuestions.jsx";
import Market from "./pages/Market/Market.jsx";
import ProductDetail from "./pages/productdetail/ProductDetail.jsx";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart.jsx";
import Cart from "./pages/Cart/Cart.jsx"
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/frequentquestions" element={<FQuestions />} />
          <Route path="/market" element={<Market />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
          <Route path="/" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
