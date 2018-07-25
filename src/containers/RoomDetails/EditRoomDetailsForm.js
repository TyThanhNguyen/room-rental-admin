import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { TextField, 
         RaisedButton 
        } from 'material-ui';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import { connect } from 'react-redux';
import { editRoomDetails } from '../../actions/RoomDetails';
import { browserHistory } from 'react-router';
import axios from 'axios';

class EditRoomDetailsForm extends Component {
    state = {
        name: this.props.location.state.name,
        error: ''
    }

    onItemChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const {id} = this.props.location.state;
        if (!this.state.name) {
            this.setState(() => ({ error: 'Please provide name of item'}));
        } else {
            this.setState(() => ({error: '' }));
            axios.patch(`http://localhost:3000/admin/room-detail/${id}`, {name: this.state.name}).then((result) => {
                this.props.dispatch(editRoomDetails({id: result.data._id, name: result.data.name}));
            }).catch((error) => {
                console.log(error);
            })
            this.setState(() => ({name: ''}));
            browserHistory.push('/roomDetails');
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
            <PageBase title="Room Details"
                      navigation="Application / Room Details"
            >
                <form onSubmit={this.onSubmit}>
    
                    <TextField
                        hintText="Rule"
                        floatingLabelText="Rule"
                        fullWidth={true}
                        value={this.state.name}
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

EditRoomDetailsForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
};

export default connect()(EditRoomDetailsForm);