import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {axiosGet,axiosPost} from './api/http';
import { Provider } from 'react-redux'
import store from './store'
import { getLocalStorage, setLocalStorage } from './asset/js/localStorage'

//定义全局axios方法
React.axiosGet = axiosGet;
React.axiosPost = axiosPost;

//定义全局localStorage方法
React.$getLocalStorage = getLocalStorage;
React.$setLocalStorage = setLocalStorage;

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
