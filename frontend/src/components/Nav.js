import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Icon } from 'react-materialize'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions/account'


const Nav = (props) => {
    return <Navbar
            className="teal lighten-1"
            alignLinks="right"
            brand={<Link to="">Todo List</Link>}
            centerChildren
            id="mobile-nav"
        >
        {props.isAuth
            ?
            <a onClick={props.logoutRequest}>Logout</a>
            :
            <div style={{display: "flex"}}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        }
        </Navbar>;
};

const mapStateToProps = state => ({
    isAuth: state.account.isAuth
});

export default connect(mapStateToProps, { logoutRequest })(Nav);