import React, { Component, PropTypes } from 'react';
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
import {addBillInclude} from '../../actions/BillIncluded';

class  BillIncluded extends Component {

    componentDidMount() {
        if (this.props.billIncluded.length === 0) {
            axios.get('http://localhost:3000/admin/bill-includeds').then((result) => {
                result.data.forEach(element => {
                    this.props.dispatch(addBillInclude({id: element._id, item: element.item}));
                });
            }).catch((e) => {
                console.log(e);
            });
        }
        
    };
    
    render() {

        const {billIncluded} = this.props;

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
            <PageBase title="Bill Includeds"
                  navigation="Application / Bill Includeds">
                <div>
                    <Link to="/billinclude/new">
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
                            {billIncluded.map(element =>
                                <TableRow key={element.id}>
                                    <TableRowColumn style={styles.columns.name}>{element.item}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.edit}>
                                        <Link className="button" 
                                                to={{
                                                    pathname: `/billinclude/${element.item}/edit`,
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
    billIncluded: state.billIncluded
});

BillIncluded.propTypes = {
    billIncluded: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func
};

export default connect(mapStateToProps)(BillIncluded);