import React from 'react';

import './index.css';
import Form from '../Form';
import ListItem from '../ListItem';

const CreateList = () => {
  return (
    <div className='page-container'>
      <Form />
      <div className='list-items-container'>
        <ListItem />
      </div>
    </div>
  );
};

export default CreateList;
