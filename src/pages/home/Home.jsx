import React from "react";
import Layout from "../layout/Layout";
import Download from "../../components/Download/Download";
import Works from "../../components/works/Works";
import Services from "../../components/services/Services";
import Content from "../../components/content/Content";
import Hero from "../../components/hero/Hero";
import Badge from "../../components/badge/Badge";
import "../../App.css";

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <div className="md:container">
        <Badge/>
        <Content/>
        <Works/>
        <Download/>
        <Services/>
        <Works/>
      </div>
    
    </Layout>
  );
};

export default  Home