import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
require('./styles/styles.css');
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();

render(
    <Router routes={routes} history={browserHistory} />, document.getElementById('app')
);
