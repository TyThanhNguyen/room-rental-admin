import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import routes from './routes';
require('./styles/styles.css');
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import { addBillInclude } from './actions/BillIncluded';
import { addFacility } from './actions/Facility';

injectTapEventPlugin();

const store = configureStore();
// store.dispatch(addBillInclude({ item: 'WiFi in Room (Free)'}));
// store.dispatch(addBillInclude({ item: 'Heating'}));
// store.dispatch(addFacility({ item: 'Furnished'}));
store.subscribe(() => {
    console.log('state: ', store.getState());
});

const jsx = (
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>
)

render(
    jsx, document.getElementById('app')
);
