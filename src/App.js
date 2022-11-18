import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import ContactUs from "./components/ContanctUs/ContactUs";
import EditProduct from "./components/EditProduct/EditProduct";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
          <Footer/>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
