import React from 'react';
import { render }  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from '../src/store/configureStore';
import { Provider} from 'react-redux';
import './index.css'

render(

    (  <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider >
    ),

    document.getElementById('root')
)

