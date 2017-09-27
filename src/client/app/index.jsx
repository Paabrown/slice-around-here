import React from 'react';
import App from './components/App.jsx';
import {render} from 'react-dom';
import exampleData from './data/exampleRestaurantData.js';
import G_MAP_API_KEY from './config.js';
import initMap from './map/mapConfig.js';

render(<App exampleData={exampleData} apiKey={G_MAP_API_KEY}/>, document.getElementById('app'))

