import React from 'react';
import Layout from '../../components/layout';
import RenderMap from '../../components/map';

const HomePage = () => {
  return (
    <Layout>
      <RenderMap darkTheme={true} />
    </Layout>
  );
}

export default HomePage;
