import React from 'react';

const SliceListEntry = ({restaurant, onListClick}) => {

  return (
    <button className={'list-entry'} onClick={() => onListClick(restaurant)} >
      <div>Name: {restaurant.name}</div>
      <div>Rating: {restaurant.rating}</div>
      <div>Address: {restaurant.location.display_address.join(', ')}</div>
    </button>
  );
}

export default SliceListEntry;
