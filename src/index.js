import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';

const initialState = {
	count: 0
};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case 'INCREMENT':
			return Object.assign({}, state, { count: state.count + 1})
		case 'DECREMENT':
			return Object.assign({}, state, { count: state.count - 1})
		default:
			return state
	}
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store ={ store } >
		<App />
	</Provider>,
	document.getElementById('root')
);
