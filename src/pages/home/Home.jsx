import React from "react";
import Layout from "../layout/Layout";
import Download from '../../components/Download/Download'
import '../../App.css'
import Works from "../../components/works/Works";

const Home = () => {
  return (
    <Layout>
  
      <Download/>
      <Works/>
      <div className="bg " >Home</div>

    </Layout>
  );
};

export default Home;
