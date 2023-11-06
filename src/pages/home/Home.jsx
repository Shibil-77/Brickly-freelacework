
import React from 'react'
import Layout from '../layout/Layout';
import Download from '../../components/Download/Download';
import Content from '../../components/content/Content';
import Works from '../../components/works/Works';
import Review from '../../components/review/Review';


const Home = () => {
  return (
    <Layout>
      <Content/>
      <Works/>
      <Download/>
      <Review/>
    </Layout>
  )
}

export default Home