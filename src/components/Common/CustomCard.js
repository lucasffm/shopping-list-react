import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Divider, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './CustomCard.css';

const CustomCard = ({ footer, containerClass, image, link, children }) => {
  return (
    <div className={containerClass}>
      <Link to={link}>
        <Card className='card'>
          <CardActionArea className='card-action-area'>
            {image && (
              <CardMedia
                component='img'
                className='card-image'
                height='100'
                image={image}
                title='image'
              />
            )}
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
  footer: PropTypes.element,
  link: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default CustomCard;
