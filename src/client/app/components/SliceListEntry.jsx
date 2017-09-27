import React from 'react';

var SliceListEntry = ({restaurant}) => (
  <div>
    <div>Name: {restaurant.name}</div>
    <div>Rating: {restaurant.rating}</div>
    <div>Address: {restaurant.location.displayAddress}</div>
  </div>
)

export default SliceListEntry;