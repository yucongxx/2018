import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
	Provider
} from 'react-redux';
import store from './redux/index';
import List from './component/List';
import Login from './component/Login';
import AA from './component/AA';

ReactDOM.render(<Provider store={store}>
	<List></List>
	<Login></Login>
	
	<br/>
	<br/>

	<AA></AA>
</Provider>, document.getElementById('root'));