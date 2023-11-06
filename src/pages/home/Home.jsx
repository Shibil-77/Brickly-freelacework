import React from 'react';
import Members from '../../components/Members/Members';
import Download from '../../components/Download/Download';
import Services from '../../components/services/Services';
import Content from '../../components/content/Content';

const Home = () => {
  return (
    <>
      <Members/>
      <Content/>
      <Services/>
      {/* <Download/> */}
    </>
  )
}

export default Home