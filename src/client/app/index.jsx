import React from 'react';
import {render} from 'react-dom';

import App from './components/App.jsx';

render(<App google={window.google}/>, document.getElementById('app'))

