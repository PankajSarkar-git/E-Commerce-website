import Navbar from "./component/NavBar";
import ItemCategory from "./component/ItemCategory";
import HomePage from "./component/HomePage";
import FooterSection from "./component/FooterSection";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ProductPage from "./component/ProductPage";
import Cart from "./component/Cart";
import LogIn from "./component/LogIn";
import SinUp from "./component/SinUp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logOut} from "./utills/authenticationSlice";
import ProtectedRouteds from "./component/ProtectedRouteds";

const App = () => {
  const authentication = useSelector((store) => {
    return store.authentication.isAuthentication;
  });

  const dispatch = useDispatch()

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName === null) {
      dispatch(logOut())
    }
  }, []);

  console.log(authentication);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/sinup" element={<SinUp />} />
        <Route element={<ProtectedRouteds authentication={authentication} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductList" element={<ItemCategory />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductList/:ProductId" element={<ProductPage />} />
        </Route>
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
};

export default App;
