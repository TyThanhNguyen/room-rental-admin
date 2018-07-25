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
import {addRoomType} from '../../actions/RoomType';

class RoomType extends Component {
    
    componentDidMount() {
        let {dispatch} = this.props;
        if (this.props.roomType.length === 0) {
            axios.get('http://localhost:3000/admin/room-types').then((result) => {
                result.data.forEach(element => {
                    dispatch(addRoomType({id: element._id, name: element.name, description: element.description}));
                });
            }).catch((e) => {
                console.log(e);
            });
        }
    }
    render () {

        const {roomType} = this.props;
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
            <PageBase title="Room Type"
                  navigation="Application / Room Type">
                <div>
                    <Link to="/roomtype/new">
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
                            {roomType.map(element =>
                                <TableRow key={element.id}>
                                    <TableRowColumn style={styles.columns.name}>{element.name}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.edit}>
                                        <Link className="button" 
                                                to={{
                                                    pathname: `/roomtype/${element.name}/edit`,
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
    roomType: state.roomType
});

RoomType.propTypes = {
    dispatch: PropTypes.func,
    roomType: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps)(RoomType);