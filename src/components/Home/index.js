import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import './index.css';

import CustomCard from '../Common/CustomCard';

const Home = () => {
  return (
    <div className='page-container'>
      <CustomCard containerClass='new-list-container'>
        <div>
          <p className='title'>Adicionar Nova Lista!</p>
        </div>
      </CustomCard>

      <CustomCard
        containerClass='list-container'
        footer={
          <div className='list-footer'>
            <p>17/04/2019</p>
            <p>R$ 100,00</p>
          </div>
        }
      >
        <div>
          <p className='title'>Mês</p>
          <div className='list-card-body'>
            <div className='list-card-item'>
              <FontAwesomeIcon icon={faShoppingBasket} size='sm' />
              <p>1 Item(s) restante</p>
            </div>
            <div className='list-card-item'>
              <FontAwesomeIcon icon={faCheck} size='sm' />
              <p>2 Item(s) comprados</p>
            </div>
          </div>
        </div>
      </CustomCard>
    </div>
  );
};

export default Home;
