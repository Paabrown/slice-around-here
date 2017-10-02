import React from 'react';

import SliceListEntry from './SliceListEntry.jsx';

const SliceList = ({currentRestaurants, onListClick}) => {

  return (
  <div className={'restaurant-container'}>
    <div className={'sub-heading'}>Slices around here</div>
    <div className={'restaurant-list'}>
      {currentRestaurants ? currentRestaurants.map((restaurant, ind) => (
        <SliceListEntry  key={restaurant.id} restaurant={restaurant} onListClick={onListClick} />
        )
      ) : null}
    </div>
  </div>
  );
}

export default SliceList;