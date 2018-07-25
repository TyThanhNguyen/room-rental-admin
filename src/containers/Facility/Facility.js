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
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {grey200, pink500, grey500} from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import axios from 'axios';
import {addFacility} from '../../actions/Facility';


class Facility extends Component {

    componentDidMount() {
        let {dispatch} = this.props;
        if (this.props.facility.length === 0) {
            axios.get('http://localhost:3000/admin/facilities').then((result) => {
                result.data.forEach(element => {
                    dispatch(addFacility({id: element._id, item: element.item}));
                });
            }).catch((e) => {
                console.log(e);
            });
        }
    }

    render() {

        const {facility} = this.props;
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
            <PageBase title="Facilities"
                  navigation="Application / Facilities">
                <div>
                    <Link to="/facility/new">
                        <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
                            <ContentAdd/>
                        </FloatingActionButton>
                    </Link>
    
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn style={styles.columns.name}>Item</TableHeaderColumn>
                                <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {facility.map(element =>
                                <TableRow key={element.id}>
                                    <TableRowColumn style={styles.columns.name}>{element.item}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.edit}>
                                        <Link className="button" 
                                                to={{
                                                    pathname: `/facility/${element.item}/edit/`,
                                                    state: {
                                                        id: element.id,
                                                        item: element.item
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
    facility: state.facility
});

Facility.propTypes = {
    facility: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Facility);