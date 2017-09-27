import React from 'react';
import SliceListEntry from './SliceListEntry.jsx';

var SliceList = ({currentRestaurants}) => (
  <div>
    <div>Slices around here</div>
    {currentRestaurants.businesses.map(restaurant => (
      <SliceListEntry restaurant={restaurant} />
      )
    )}
  </div>
  )

export default SliceList;