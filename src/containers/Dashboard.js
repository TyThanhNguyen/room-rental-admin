import React from 'react';
import {cyan600, pink600, purple, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import InfoBox from '../components/dashboard/InfoBox';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import globalStyles from '../styles';
import Data from '../data';

const DashboardPage = () => {
    return (
        <div>
            <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
                    <InfoBox Icon={ShoppingCart}
                             color={pink600}
                             title="Total Profit"
                             value="1500k"
                    />
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
                    <InfoBox Icon={ThumbUp}
                             color={cyan600}
                             title="Likes"
                             value="432"
                    />
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
                    <InfoBox Icon={Assessment}
                             color={cyan600}
                             title="Sales"
                             value="4321"
                    />
                </div>
                
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b=15">
                    <InfoBox Icon={Face}
                             color={cyan600}
                             title="New Members"
                             value="4321"
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;