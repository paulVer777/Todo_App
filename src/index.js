import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './store'
import {Provider} from 'react-redux'
import Start from './Components/Auth/Start'

ReactDOM.render(


    <Provider store={store}>
    <Start>
        <App />
    </Start>
    </Provider>,
    document.getElementById('root')
);

