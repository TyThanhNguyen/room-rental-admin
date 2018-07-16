import React from 'react';
import {Link} from 'react-router';
import { TextField, 
         RaisedButton 
        } from 'material-ui';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';

const FormPage = () => {
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
            <form>

                <TextField
                    hintText="Name"
                    floatingLabelText="Name"
                    fullWidth={true}
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
};

export default FormPage;