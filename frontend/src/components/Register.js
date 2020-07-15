import React, { useState } from 'react'
import {connect} from 'react-redux'
import {TextInput, Button} from 'react-materialize'
import {registerRequest} from "../actions/account"
import { Redirect } from "react-router-dom"

const Register = (props) => {
    if (props.isAuth) {
        return <Redirect to="/" />
    }


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.registerRequest(username, password, password2);
    };

    return <form onSubmit={onSubmit} style={{margin: "auto", marginTop: "4rem", maxWidth: "500px"}}>
        <h5 style={{"marginBottom": "2rem"}}>Create new account</h5>
        <TextInput
            style={{"marginBottom": "1rem"}}
            icon="account_circle"
            id="email-input"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
            icon="lock_outline"
            id="password-input"
            label="Password"
            password
            onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
            icon="lock_outline"
            id="password2-input"
            label="Confirm password"
            password
            onChange={(e) => setPassword2(e.target.value)}
        />
        <Button
            style={{float: "right"}}
        >
            Register
        </Button>
    </form>;
};

const mapStateToProps = state => ({
    isAuth: state.account.isAuth
});

export default connect(mapStateToProps, {registerRequest})(Register);