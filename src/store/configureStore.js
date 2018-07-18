import {createStore, combineReducers } from 'redux';
import BillIncludedReducer from '../reducers/BillIncludedReducer';
import FacilityReducer from '../reducers/FacilityReducer';

export default () => {
    const store = createStore(
        combineReducers({
            billIncluded: BillIncludedReducer,
            facility: FacilityReducer
        })
    );
    
    return store;
}