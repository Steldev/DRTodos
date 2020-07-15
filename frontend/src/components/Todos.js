import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { userRequest } from "../actions/account";
import { todosRequest, createRequest, setDoneRequest, deleteRequest } from "../actions/todos";
import UserTodos from "./UserTodos";
import CreateTodo from "./CreateTodo";
import { Link } from "react-router-dom"

const Todos = (props) => {
    useEffect(() => {
        props.userRequest();
        props.todosRequest();
    }, [props.account.token]);

    return (<div>
            {props.account.isAuth
                ?
                <>
                    <CreateTodo createRequest={props.createRequest}/>
                    <UserTodos
                        todos={props.todos}
                        setDoneRequest={props.setDoneRequest}
                        deleteRequest={props.deleteRequest}
                    />
                </>
                :
                <h5 style={{marginTop: "2rem"}}>User needs to <Link to="/login">login</Link> first before accessing todo list</h5>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos.todos,
    account: state.account
});

const mapDispatchToProps = {
    userRequest,
    todosRequest,
    createRequest,
    deleteRequest,
    setDoneRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);