import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from 'root/containers'
import configureStore from 'root/store'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
