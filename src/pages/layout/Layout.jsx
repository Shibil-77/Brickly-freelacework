import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FooterPage from "../FooterPage/FooterPage";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      
      {children}
      <FooterPage />
    </>
  );
};

export default Layout;
