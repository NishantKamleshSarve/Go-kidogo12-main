// src/component/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageProvider } from "../LanguageContext"; // ✅ make sure this is imported

const Layout = () => {
  return (
    <LanguageProvider> {/* ✅ Wrap entire layout */}
      <Header />
      
        <Outlet />
      
      <Footer />
    </LanguageProvider>
  );
};

export default Layout;
