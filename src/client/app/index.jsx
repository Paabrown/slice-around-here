import React from 'react';
import App from './components/App.jsx';
import {render} from 'react-dom';
import exampleData from './data/exampleRestaurantData.js';

render(<App exampleData={exampleData}/>, document.getElementById('app'))

