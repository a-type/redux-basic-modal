import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

require('../sass/main.scss');

const store = configureStore();

render((
    <Root store={store}/>
), document.getElementById('main'));