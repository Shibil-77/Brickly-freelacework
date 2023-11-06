
import React from "react";
import Layout from "../layout/Layout";
import Download from '../../components/Download/Download'
import '../../App.css'
import Works from "../../components/works/Works";
import Services from "../../components/services/Services";
import Content from "../../components/content/Content";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <div className="container">
        <Content/>
        <Download/>
        <Works/>
        <Services/>
      </div>
    
    </Layout>
  );
};

export default Home;
