import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import BillInclude from './containers/BillInclude/BillInclude';
import BillNewPage from './containers/BillInclude/BillIncludeForm';
import BillEditPage from './containers/BillInclude/BillIncludeForm';

import Facility from './containers/Facility/Facility';
import FacilityNewPage from './containers/Facility/FacilityForm';
import FacilityEditPage from './containers/Facility/FacilityForm';

import Property from './containers/Property/Property';
import PropertyNewPage from './containers/Property/PropertyForm';
import PropertyEditPage from './containers/Property/PropertyForm';

import RoomDetails from './containers/RoomDetails/RoomDetails';
import RoomDetailsNewPage from './containers/RoomDetails/RoomDetailsForm';
import RoomDetailsEditPage from './containers/RoomDetails/RoomDetailsForm';

import RoomType from './containers/RoomType/RoomType';
import RoomTypeNewPage from './containers/RoomType/RoomTypeForm';
import RoomTypeEditPage from './containers/RoomType/RoomTypeForm';

import Security from './containers/SecurityAndSafety/SecurityAndSafety';
import SecurityNewPage from './containers/SecurityAndSafety/SecurityAndSafetyForm';
import SecurityEditPage from './containers/SecurityAndSafety/SecurityAndSafetyForm';

import Room from './containers/Room/Room';
import RoomNewPage from './containers/Room/RoomForm';
import RoomEditPage from './containers/Room/RoomForm';

import Place from './containers/Place/Place';
import PlaceNewPage from './containers/Place/PlaceForm';
import PlaceEditPage from './containers/Place/PlaceForm';

import LoginPage from './containers/LoginPage';
import NotFoundPage from './containers/NotFoundPage';

export default (
  <Route>
    <Route path="/login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>

      <Route path="billinclude" component={BillInclude}/>
      <Route path="billinclude/new" component={BillNewPage}/>
      <Route path="billinclude/edit" component={BillEditPage}/>

      <Route path="facility" component={Facility}/>
      <Route path="facility/new" component={FacilityNewPage}/>
      <Route path="facility/edit" component={FacilityEditPage}/>

      <Route path="property" component={Property}/>
      <Route path="property/new" component={PropertyNewPage}/>
      <Route path="property/edit" component={PropertyEditPage}/>

      <Route path="roomdetails" component={RoomDetails}/>
      <Route path="roomdetails/new" component={RoomDetailsNewPage}/>
      <Route path="roomdetails/edit" component={RoomDetailsEditPage}/>

      <Route path="roomtype" component={RoomType}/>
      <Route path="roomtype/new" component={RoomTypeNewPage}/>
      <Route path="roomtype/edit" component={RoomTypeEditPage}/>

      <Route path="security" component={Security}/>
      <Route path="security/new" component={SecurityNewPage}/>
      <Route path="security/edit" component={SecurityEditPage}/>

      <Route path="room" component={Room}/>
      <Route path="room/new" component={RoomNewPage}/>
      <Route path="room/edit" component={RoomEditPage}/>

      <Route path="place" component={Place}/>
      <Route path="place/new" component={PlaceNewPage}/>
      <Route path="place/edit" component={PlaceEditPage}/>

      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
