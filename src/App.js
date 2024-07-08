import "./App.css";
import { Navbar } from "../src/Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offers from "./Pages/Offers";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Offers />} />
          <Route path="/mens" element={<ShopCategory catergory="men" />} />
          <Route path="/womens" element={<ShopCategory catergory="women" />} />
          <Route path="/kids" element={<ShopCategory catergory="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
