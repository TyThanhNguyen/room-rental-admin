import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { TextField, 
         RaisedButton 
        } from 'material-ui';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import { connect } from 'react-redux';
import { editBillInclude } from '../../actions/BillIncluded';
import { browserHistory } from 'react-router';
import axios from 'axios';

class EditBillIncludeForm extends Component {
    state = {
        item: this.props.location.state.item,
        error: ''
    }

    onItemChange = (e) => {
        const item = e.target.value;
        this.setState(() => ({ item }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {id} = this.props.location.state;
        console.log('id: ', id);
        if (!this.state.item) {
            this.setState(() => ({ error: 'Please provide name of item'}));
        } else {
            this.setState(() => ({error: '' }));
            axios.patch(`http://localhost:3000/admin/bill-included/${id}`, {item: this.state.item}).then((result) => {
                console.log(result);
                this.props.dispatch(editBillInclude({id: result.data._id, item: result.data.item}));
            }).catch((error) => {
                console.log(error);
            })
            this.setState(() => ({item: ''}));
            browserHistory.push('/billinclude');
        }
    };

    render() {
        
        const styles = {
            toggleDiv: {
                maxWidth: 300,
                marginTop: 40,
                marginBottom: 5 
            },
            toggleLabel: {
                color: grey400,
                fontWeight: 100
            },
            buttons: {
                marginTop: 30,
                float: 'right'
            },
            saveButton: {
                marginLeft: 5
            }
        };
        return (
            <PageBase title="Bill Included"
                      navigation="Application / Bill Included"
            >
                <form onSubmit={this.onSubmit}>
    
                    <TextField
                        hintText="Name of Item"
                        floatingLabelText="Name of Item"
                        fullWidth={true}
                        value={this.state.item}
                        onChange={this.onItemChange}
                    />
    
                    <div style={styles.buttons}>
                        <Link to="/">
                            <RaisedButton label="Cancel" />
                        </Link>
    
                        <RaisedButton label="Save"
                                      style={styles.saveButton}
                                      type="submit"
                                      primary={true}
                        />
                    </div>
                </form>
            </PageBase>
        );
    }
};

EditBillIncludeForm.propTypes = {
    id: PropTypes.string,
    item: PropTypes.string,
};

export default connect()(EditBillIncludeForm);