import React from 'react';
import SliceListEntry from './SliceListEntry.jsx';

var SliceList = ({currentRestaurants, onListClick}) => {
  console.log('onListClick', onListClick)

  return (
  <div>
    <div>Slices around here</div>
    {currentRestaurants.map((restaurant, ind) => (
      <SliceListEntry restaurant={restaurant} onListClick={onListClick} />
      )
    )}
  </div>
  )
}

export default SliceList;