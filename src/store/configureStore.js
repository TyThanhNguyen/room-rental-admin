import {createStore, combineReducers } from 'redux';
import BillIncludedReducer from '../reducers/BillIncludedReducer';
import FacilityReducer from '../reducers/FacilityReducer';
import PropertyRuleReducer from '../reducers/PropertyRuleReducer';
import RoomDetailsReducer from '../reducers/RoomDetailsReducer';
import RoomTypeReducer from '../reducers/RoomTypeReducer';
import SecurityAndSafety from '../reducers/SecurityAndSafety';

export default () => {
    const store = createStore(
        combineReducers({
            billIncluded: BillIncludedReducer,
            facility: FacilityReducer,
            propertyRule: PropertyRuleReducer,
            roomDetails: RoomDetailsReducer,
            roomType: RoomTypeReducer,
            securityAndSafety: SecurityAndSafety
        })
    );
    
    return store;
}