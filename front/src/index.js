import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
    <BrowserRouter>
    <Provider store={store}>
<App /> 
</Provider>
</BrowserRouter>,
 document.getElementById('root'));

registerServiceWorker();