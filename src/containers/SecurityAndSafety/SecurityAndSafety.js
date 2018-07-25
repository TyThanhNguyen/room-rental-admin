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
import {addSecurityAndSafety} from '../../actions/SecurityAndSafety';

class SecurityAndSafety extends Component {
    
    componentDidMount() {
        let {dispatch} = this.props;
        if (this.props.securityAndSafety.length === 0) {
            axios.get('http://localhost:3000/admin/security-safeties').then((result) => {
                result.data.forEach(element => {
                    dispatch(addSecurityAndSafety({id: element._id, name: element.name}));
                });
            }).catch((e) => {
                console.log(e);
            });
        }
    }
    render () {

        const {securityAndSafety} = this.props;
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
            <PageBase title="Security and Safety"
                  navigation="Application / Security and Safety">
                <div>
                    <Link to="/securityandsafety/new">
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
                            {securityAndSafety.map(element =>
                                <TableRow key={element.id}>
                                    <TableRowColumn style={styles.columns.name}>{element.name}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.edit}>
                                        <Link className="button" 
                                                to={{
                                                    pathname: `/securityandsafety/${element.name}/edit`,
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
    securityAndSafety: state.securityAndSafety
});

SecurityAndSafety.propTypes = {
    dispatch: PropTypes.func,
    securityAndSafety: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps)(SecurityAndSafety);