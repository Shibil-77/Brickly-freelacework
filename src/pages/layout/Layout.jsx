import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FooterPage from "../FooterPage/FooterPage";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
      {children}
      </div>

      <FooterPage />
    </>
  );
};

export default Layout;
