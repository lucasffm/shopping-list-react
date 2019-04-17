import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Divider } from '@material-ui/core';

import './CustomCard.css';

const CustomCard = ({ footer, containerClass, children }) => {
  return (
    <div className={containerClass}>
      <Card className='card'>
        <CardActionArea className='card-action-area'>
          <CardContent className='card-content'>{children}</CardContent>
        </CardActionArea>
        {footer && (
          <div>
            <Divider />
            <CardActions className='card-footer'>{footer}</CardActions>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CustomCard;
