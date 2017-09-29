import React from 'react';

var CurrentRestaurant = ({selectedRestaurant}) => (
  <div className={'current'}> 
    <span>THIS IS THE CURRENT RESTAURANT</span>
    <div>Name: {selectedRestaurant.name}</div>
    <div>Rating: {selectedRestaurant.rating}</div>
    <div>Address: {selectedRestaurant.location.display_address}</div>
  </div>
)

export default CurrentRestaurant;