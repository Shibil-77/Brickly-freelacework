import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FooterPage from "../FooterPage/FooterPage";
import Footers from "../../components/footer/Footers";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      
      {children}

      <Footers />
    </>
  );
};

export default Layout;
