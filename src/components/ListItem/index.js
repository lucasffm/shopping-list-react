import React from 'react';
import { Typography, Checkbox } from '@material-ui/core';

import CustomCard from '../Common/CustomCard';
import ListItemFooter from '../ListItemFooter';

const ListItem = () => {
  return (
    <CustomCard
      image='https://ichef.bbci.co.uk/news/624/cpsprodpb/17A2C/production/_104421869_cafe1.jpg'
      link='#'
      containerClass='list-item'
      footer={<ListItemFooter />}
    >
      <div>
        <div className='list-item-header'>
          <Typography variant='subtitle1' component='h2'>
            Café
          </Typography>
          <Checkbox />
        </div>
        <Typography component='p'>1 Unidade</Typography>
        <Typography component='p'>R$ 10,00</Typography>
      </div>
    </CustomCard>
  );
};

export default ListItem;
