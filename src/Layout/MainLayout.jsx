import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return <div>

    <Navbar></Navbar>
    <div>
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
    <Toaster position="top-right"></Toaster>
  </div>;
};

export default MainLayout;
