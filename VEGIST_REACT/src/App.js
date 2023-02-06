import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Products from "./components/Products/Products";
import ListProducts from "./components/ListProducts/ListProducts";
import Footer from "./components/footer/Footer";
import BottomFooter from "./components/footer/BottomFooter";
import BackToTop from "./components/footer/BackToTop";
import AboutUs from "./components/pages/about/AboutUs";
import Billing from "./components/pages/billing/Billing";
import Questions from "./components/pages/questions/Questions";
import ContactUs from "./components/pages/contact us/ContactUs";
import TermsAndConditions from "./components/pages/terms&conditions/TermsAndConditions";
import Account from "./components/account/Account";
import Register from "./components/account/Register";
import Login from "./components/account/Login";
import Wishlist from "./components/wishlist/Wishlist";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/cart/CheckOut";
import QuickView from "./components/quick view/QuickView";
import Payment from "./components/footer/policy/Payment";
import Privacy from "./components/footer/policy/Privacy";
import Return from "./components/footer/policy/Return";
import Shipping from "./components/footer/policy/Shipping";
import Tracking from "./components/footer/Tracking";
import Addresses from "./components/footer/Addresses";
import NotFound from "./components/NotFound";
import OrderComplete from "./components/cart/OrderComplete";
import ForgotPassword from "./components/account/ForgotPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/listproducts" element={<ListProducts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/view-cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/quickview" element={<QuickView />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/return" element={<Return />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/address" element={<Addresses />} />
          <Route path="/ordercomplete" element={<OrderComplete />} />
          <Route path="/forgor-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BottomFooter />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
