import React from 'react';

import CustomCard from '../Common/CustomCard';

const NewList = () => {
  return (
    <CustomCard link='/lista' containerClass='new-list-container'>
      <div>
        <p className='title'>Adicionar Nova Lista!</p>
      </div>
    </CustomCard>
  );
};

export default NewList;
