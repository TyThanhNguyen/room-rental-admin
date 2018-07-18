import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { TextField, 
         RaisedButton 
        } from 'material-ui';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import { connect } from 'react-redux';
import { addBillInclude } from '../../actions/BillIncluded';
import { browserHistory } from 'react-router';
import axios from 'axios';

class NewBillIncludeForm extends Component {
    state = {
        item: '',
        error: ''
    }

    onItemChange = (e) => {
        const item = e.target.value;
        this.setState(() => ({ item }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        axios.post('http://localhost:3000/admin/bill-included', {
            item: this.state.item
        }).then((result) => {
            if (result.data === 'Already existed') {
                this.setState(() => ({error: 'This item is already existed' }));
                console.log(this.state);
            } else {
                dispatch(addBillInclude({id: result.data._id, item: result.data.item}));
            }
        }).catch((e) => {
            console.log(e);
        })
        this.setState(() => ({item: ''}));
        browserHistory.push('/billinclude');
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

NewBillIncludeForm.propTypes = {
    dispatch: PropTypes.func
}

export default connect()(NewBillIncludeForm);