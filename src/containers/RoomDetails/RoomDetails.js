import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import PageBase from '../../components/PageBase';
import { FloatingActionButton, 
         Table, TableHeader, 
         TableHeaderColumn, 
         TableRow, 
         TableBody, 
         TableRowColumn 
        } from 'material-ui';
import {grey500, grey200, pink500} from 'material-ui/styles/colors';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import axios from 'axios';
import {connect} from 'react-redux';
import {addRoomDetails} from '../../actions/RoomDetails';

class RoomDetails extends Component {
    
    componentDidMount() {
        let {dispatch} = this.props;
        if (this.props.roomDetails.length === 0) {
            axios.get('http://localhost:3000/admin/room-details').then((result) => {
                result.data.forEach(element => {
                    dispatch(addRoomDetails({id: element._id, name: element.name}));
                });
            }).catch((e) => {
                console.log(e);
            });
        }
    }
    render () {

        const {roomDetails} = this.props;
        const styles = {
            floatingActionButton: {
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed'
            },
            editButton: {
                fill: grey500
            },
            columns: {
                id: {
                    width: '10%'
                },
                name: {
                    width: '40%'
                },
                price: {
                    width: '20%'
                },
                category: {
                    width: '20%'
                },
                edit: {
                    width: '10%'
                }
            }
        };
        
        return (
            <PageBase title="Room Details"
                  navigation="Application / Room Details">
                <div>
                    <Link to="/roomdetails/new">
                        <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
                            <ContentAdd/>
                        </FloatingActionButton>
                    </Link>
    
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
                                <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {roomDetails.map(element =>
                                <TableRow key={element.id}>
                                    <TableRowColumn style={styles.columns.name}>{element.name}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.edit}>
                                        <Link className="button" 
                                                to={{
                                                    pathname: `/roomdetails/${element.name}/edit`,
                                                    state: {
                                                        id: element.id,
                                                        name: element.name
                                                    }
                                                }}
                                        >
                                            <FloatingActionButton zDepth={0}
                                                                  mini={true}
                                                                  backgroundColor={grey200}
                                                                  iconStyle={styles.editButton}
                                            >
                                                <ContentCreate/>
                                            </FloatingActionButton>
                                        </Link>
                                    </TableRowColumn>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </PageBase>
        );
    
    }
};

const mapStateToProps = (state) => ({
    roomDetails: state.roomDetails
});

RoomDetails.propTypes = {
    dispatch: PropTypes.func,
    roomDetails: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps)(RoomDetails);