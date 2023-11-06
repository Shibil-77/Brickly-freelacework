import React from "react";
import Layout from "../layout/Layout";
import Download from '../../components/Download/Download'
import '../../App.css'
import Works from "../../components/works/Works";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <Layout>
     <Banner/>
      <Download/>
      <Works/>
      {/* <div className="bg " >Home</div> */}

    </Layout>
  );
};

export default Home;
