import React from "react";
import Layout from "../layout/Layout";
import Download from "../../components/Download/Download";
import "../../App.css";
import Works from "../../components/works/Works";
import Review from "../../components/review/Review";
import Content from "../../components/content/Content";

const Home = () => {
  return (
    <Layout>
      <Works />
      <Download />
      <Content/>
      <Review />
    </Layout>
  );
};

export default Home;
