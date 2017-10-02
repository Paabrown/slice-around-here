import React from 'react';

const CurrentRestaurant = ({selectedRestaurant}) => (
  <div className={'current'} > 
    <div>Selected Slice</div>
    <br/>
    <div>Name: {selectedRestaurant ? selectedRestaurant.name : 'none'}</div>
    <div>Rating: {selectedRestaurant ? selectedRestaurant.rating : 'none'}</div>
    <div>Address: {selectedRestaurant ? selectedRestaurant.location.display_address.join(', ') : 'none'}</div>
  </div>
)

export default CurrentRestaurant;