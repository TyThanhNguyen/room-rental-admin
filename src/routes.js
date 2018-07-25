import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';

import BillInclude from './containers/BillInclude/BillInclude';
import BillNewPage from './containers/BillInclude/NewBillIncludeForm';
import BillEditPage from './containers/BillInclude/EditBillIncludeForm';

import Facility from './containers/Facility/Facility';
import FacilityNewPage from './containers/Facility/NewFacilityForm';
import FacilityEditPage from './containers/Facility/EditFacilityForm';

import Property from './containers/Property/Property';
import PropertyNewPage from './containers/Property/NewPropertyForm';
import PropertyEditPage from './containers/Property/EditPropertyForm';

import RoomDetails from './containers/RoomDetails/RoomDetails';
import RoomDetailsNewPage from './containers/RoomDetails/NewRoomDetailsForm';
import RoomDetailsEditPage from './containers/RoomDetails/EditRoomDetailsForm';

import RoomType from './containers/RoomType/RoomType';
import RoomTypeNewPage from './containers/RoomType/NewRoomTypeForm';
import RoomTypeEditPage from './containers/RoomType/EditRoomTypeForm';

import Security from './containers/SecurityAndSafety/SecurityAndSafety';
import SecurityNewPage from './containers/SecurityAndSafety/NewSecurityAndSafetyForm';
import SecurityEditPage from './containers/SecurityAndSafety/EditSecurityAndSafetyForm';

import Room from './containers/Room/Room';
import RoomNewPage from './containers/Room/RoomForm';
import RoomEditPage from './containers/Room/RoomForm';

import Place from './containers/Place/Place';
import PlaceNewPage from './containers/Place/NewPlaceForm';
import PlaceEditPage from './containers/Place/EditPlaceForm';

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
      <Route path="billinclude/:singleBillItem/edit" component={BillEditPage}/>

      <Route path="facility" component={Facility}/>
      <Route path="facility/new" component={FacilityNewPage}/>
      <Route path="facility/:singleBillItem/edit" component={FacilityEditPage}/>

      <Route path="propertyrule" component={Property}/>
      <Route path="propertyrule/new" component={PropertyNewPage}/>
      <Route path="propertyrule/:singlePropertyRuleItem/edit" component={PropertyEditPage}/>

      <Route path="roomdetails" component={RoomDetails}/>
      <Route path="roomdetails/new" component={RoomDetailsNewPage}/>
      <Route path="roomdetails/:singleRoomDetails/edit" component={RoomDetailsEditPage}/>

      <Route path="roomtype" component={RoomType}/>
      <Route path="roomtype/new" component={RoomTypeNewPage}/>
      <Route path="roomtype/:singleRoomType/edit" component={RoomTypeEditPage}/>

      <Route path="securityandsafety" component={Security}/>
      <Route path="securityandsafety/new" component={SecurityNewPage}/>
      <Route path="securityandsafety/:singleSecurityAndSafetyItem/edit" component={SecurityEditPage}/>

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
