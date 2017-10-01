import React from 'react';

var CurrentRestaurant = ({selectedRestaurant}) => (
  <div className={'current'}> 
    <span>Selected Slice</span>
    <div>Name: {selectedRestaurant ? selectedRestaurant.name : 'none'}</div>
    <div>Rating: {selectedRestaurant ? selectedRestaurant.rating : 'none'}</div>
    <div>Address: {selectedRestaurant ? selectedRestaurant.location.display_address.join(', ') : 'none'}</div>
  </div>
)

export default CurrentRestaurant;