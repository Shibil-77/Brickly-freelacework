
import React from "react";
import Layout from "../layout/Layout";
import Download from '../../components/Download/Download'
import '../../App.css'
import Works from "../../components/works/Works";
import Services from "../../components/services/Services";
import Content from "../../components/content/Content";
import Hero from "../../components/hero/Hero";
import Badge from "../../components/badge/Badge";

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <div className="container">
        <Badge/>
        <Content/>
        <Download/>
        <Services/>
        <Works/>
      </div>
    
    </Layout>
  );
};


export default Home