import React from 'react';

import './index.css';

import NewList from '../NewList';
import List from '../List';

const Home = () => {
  return (
    <div className='page-container'>
      <NewList />
      <List />
    </div>
  );
};

export default Home;
