import React from "react";
import Layout from "../layout/Layout";
import Download from '../../components/Download/Download'
import '../../App.css'
import Works from "../../components/works/Works";
import Review from "../../components/review/Review";

const Home = () => {
  return (
    <Layout>
      <Download/>
      <Works/>
      <Review/>
      {/* <div className="bg " >Home</div> */}

    </Layout>
  );
};

export default Home