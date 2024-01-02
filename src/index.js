import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './Hello';
// import Card from './Card';
// import CardList from './CardList';
import App from './Containers/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { search_Robots, requestRobots } from './reducers';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
// import { robots } from './robots';
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const rootReducer =  combineReducers({
    search_Robots,
    requestRobots
})

// const store = createStore(rootReducer)

const store = createStore( rootReducer, applyMiddleware(thunk, logger) )

ReactDOM.render(
    <Provider store= { store } >
        <App />
    </Provider>, document.getElementById('root')
);

// ReactDOM.render(<Hello greeting = {"Hello Azghour-Saad"}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
