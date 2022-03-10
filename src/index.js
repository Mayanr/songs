import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    // any component inside of our application can access the Redux store through the provider tag
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root')
);