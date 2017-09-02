import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../public/index.scss'

import store from './store';


import Home from './Home.jsx'

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('app')
);
