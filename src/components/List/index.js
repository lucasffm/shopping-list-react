import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import './index.css';

import CustomCard from '../Common/CustomCard';
import ListFooter from '../Common/ListFooter';
import ListItem from '../Common/ListItem';

const List = () => {
  return (
    <CustomCard
      link='/lista'
      containerClass='list-container'
      footer={<ListFooter />}
    >
      <div>
        <p className='title'>Mês</p>
        <div className='list-card-body'>
          <ListItem icon={faShoppingBasket} text='1 Item(s) restante' />
          <ListItem icon={faCheck} text='2 Item(s) comprados' />
        </div>
      </div>
    </CustomCard>
  );
};

export default List;
