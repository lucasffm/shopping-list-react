import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './CustomCard.css';

const CustomCard = ({ footer, containerClass, link, children }) => {
  return (
    <div className={containerClass}>
      <Link to={link}>
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
      </Link>
    </div>
  );
};

CustomCard.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element
};

export default CustomCard;
