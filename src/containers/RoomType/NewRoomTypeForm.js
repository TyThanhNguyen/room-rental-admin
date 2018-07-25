import React, { Component, PropTypes } from 'react';
import {Link, browserHistory} from 'react-router';
import { TextField, 
         RaisedButton 
        } from 'material-ui';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import { connect } from 'react-redux';
import { addRoomType } from '../../actions/RoomType';
import axios from 'axios';

class NewRoomTypeForm extends Component {
    state = {
        name: '',
        error: ''
    }

    onItemChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        axios.post('http://localhost:3000/admin/room-type', {
            name: this.state.name
        }).then((result) => {
            if (result.data === 'Already existed') {
                this.setState(() => ({error: 'This item is already existed' }));
            } else {
                dispatch(addRoomType({id: result.data._id, name: result.data.name}));
            }
        }).catch((e) => {
            console.log(e);
        });
        this.setState(() => ({name: ''}));
        browserHistory.push('/roomtype');
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
            <PageBase title="Room Type"
                      navigation="Application / Room Type"
            >
                <form onSubmit={this.onSubmit}>
    
                    <TextField
                        hintText="Type"
                        floatingLabelText="Type"
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

NewRoomTypeForm.propTypes = {
    dispatch: PropTypes.func
}

export default connect()(NewRoomTypeForm);