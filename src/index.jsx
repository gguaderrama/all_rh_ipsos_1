import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import translationsD from './translations'


const defaultLocale = 'es'

import allReducers from './reducers'
const store = createStore(allReducers,{ Intl: { locale: defaultLocale }},applyMiddleware(thunk)
)

// store.dispatch(IntlActions.setLocale('zh'))

ReactDOM.render(
<Provider store = {store}>
<IntlProvider translations={translationsD}>
<App />
</IntlProvider>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
