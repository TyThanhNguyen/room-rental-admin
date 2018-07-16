import React from 'react';
import {grey500, white} from 'material-ui/styles/colors';
import {Link} from 'react-router';
import ThemeDefault from '../theme-default';
import { MuiThemeProvider } from 'material-ui/styles';
import { Paper, TextField, Checkbox, RaisedButton, FlatButton } from 'material-ui';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';

const LoginPage = () => {
    const styles = {
        loginContainer: {
            minWidth: 320,
            maxWidth: 400,
            height: 'auto',
            position: 'absolute',
            top: '20%',
            left: 0,
            right: 0,
            margin: 'auto'
        },
        paper: {
            padding: 20,
            overflow: 'auto'
        },
        buttonsDiv: {
            textAlign: 'center',
            padding: 10
        },
        flatButton: {
            color: grey500
        },
        checkRemember: {
            style: {
                float: 'left',
                maxWidth: 180,
                paddingTop: 5
            },
            labelStyle: {
                color: grey500
            },
            iconStyle: {
                color: grey500,
                borderColor: grey500,
                fill: grey500
            }
        },
        loginBtn: {
            float: 'right'
        },
        btn: {
            background: '#4f81e9',
            color: white,
            padding: 7,
            borderRadius: 2,
            margin: 2,
            fontSize: 13
        },
        btnFacebook: {
            background: '#4f81e9'
        },
        btnGoogle: {
            background: '#e14441'
        },
        btnSpan: {
            marginLeft: 5
        },
    };
    
    return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
            <div>
                <div style={styles.loginContainer}>

                    <Paper style={styles.paper}>

                        <form>
                            <TextField
                                hintText="E-mail"
                                floatingLabelText="E-mail"
                                fullWidth={true}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                fullWidth={true}
                                type="password"
                            />
                            <div>
                                <Checkbox
                                    label="Remember me"
                                    style={styles.checkRemember.style}
                                    labelStyle={styles.checkRemember.labelStyle}
                                    iconStyle={styles.checkRemember.iconStyle}
                                />

                                <Link to="/">
                                    <RaisedButton label="Login"
                                                  primary={true}
                                                  style={styles.loginBtn}
                                    />
                                </Link>
                            </div>
                        </form>
                    </Paper>


                    <div style={styles.buttonsDiv}>
                        <FlatButton 
                            label="Register"
                            href="/"
                            icon={<PersonAdd />}
                            style={styles.flatButton}
                        />

                        <FlatButton
                            label="Forgot Password?"
                            href="/"
                            icon={<Help />}
                            style={styles.flatButton}
                        />
                    </div>

                    <div style={styles.buttonsDiv}>
                        <Link to="/" style={{...styles.btn, ...styles.btnFacbook}}>
                            <i className="fa fa-facebook fa-lg"/>
                            <span style={styles.btnSpan}>Log in with Facebook</span>
                        </Link>
                        <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
                            <i className="fa fa-google-plus fa-lg"/>
                            <span style={styles.btnSpan}>Log in with Google</span>
                        </Link>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
};

export default LoginPage;