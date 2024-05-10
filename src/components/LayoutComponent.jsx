import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutComponent = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className=" container_type3">
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutComponent;
