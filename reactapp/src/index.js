import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import KreiranjeZadace from './component/kreiranjeZadace';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
