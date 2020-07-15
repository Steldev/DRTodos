import React, { useState } from 'react'
import {TextInput, Button} from 'react-materialize'
import {connect} from 'react-redux'
import {loginRequest} from "../actions/account"
import { Redirect } from "react-router-dom"

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to="/" />
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.loginRequest(username, password);
    };

    return <form onSubmit={onSubmit} style={{margin: "auto", marginTop: "4rem", maxWidth: "500px"}}>
        <h5 style={{"marginBottom": "2rem"}}>Login</h5>
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
        <Button
            style={{float: "right"}}
        >
            Login
        </Button>
    </form>;
};

const mapStateToProps = state => ({
    isAuth: state.account.isAuth
});

export default connect(mapStateToProps, {loginRequest})(Login);