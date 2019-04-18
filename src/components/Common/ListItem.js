import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = ({ icon, text }) => {
  return (
    <div className='list-card-item'>
      <FontAwesomeIcon icon={icon} size='sm' />
      <p>{text}</p>
    </div>
  );
};

export default ListItem;
