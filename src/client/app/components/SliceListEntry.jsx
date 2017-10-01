import React from 'react';

var SliceListEntry = ({restaurant, onListClick}) => {
    console.log('onListclick 2', onListClick)

    return (
      <button className={'list-entry'} onClick={() => onListClick(restaurant)} onSelect={() => onListClick(restaurant)} onTouchStart={() => onListClick(restaurant)}>
        <div></div>
        <div>Name: {restaurant.name}</div>
        <div>Rating: {restaurant.rating}</div>
        <div>Address: {restaurant.location.display_address.join(', ')}</div>
      </button>
    )
}

export default SliceListEntry;