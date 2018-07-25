import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { TextField, 
         RaisedButton 
        } from 'material-ui';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import { connect } from 'react-redux';
import { editFacility } from '../../actions/Facility';
import { browserHistory } from 'react-router';
import axios from 'axios';

class EditFacilityForm extends Component {
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
        if (!this.state.item) {
            this.setState(() => ({ error: 'Please provide name of item'}));
        } else {
            this.setState(() => ({error: '' }));
            axios.patch(`http://localhost:3000/admin/facility/${id}`, {item: this.state.item}).then((result) => {
                this.props.dispatch(editFacility({id: result.data._id, item: result.data.item}));
            }).catch((error) => {
                console.log(error);
            })
            this.setState(() => ({item: ''}));
            browserHistory.push('/facility');
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

EditFacilityForm.propTypes = {
    id: PropTypes.string,
    item: PropTypes.string,
};

export default connect()(EditFacilityForm);