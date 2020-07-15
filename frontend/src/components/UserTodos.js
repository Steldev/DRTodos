import React from 'react'
import { Collection, CollectionItem, Checkbox, Button, Row, Col } from 'react-materialize'

const UserTodos = (props) => {
    return (
        <>
            {!props.todos || !props.todos.length
                ?
                <h5 style={{marginTop: "2rem"}}>Todo list is empty</h5>
                :
                <>
                    <h5 style={{margin: "4rem 0 2rem 0"}}>Todos</h5>
                    <Collection>
                        {props.todos.map((todo, key) => <CollectionItem key={key}>
                            <Row style={{margin: '0'}}>
                                <Col s={1}>
                                    <Checkbox
                                        className="secondary-content"
                                        id={"checkbox-" + key}
                                        checked={todo.is_done}
                                        value=""
                                        label=""
                                        onClick={
                                            (e) => {
                                                e.preventDefault();
                                                props.setDoneRequest(todo.id,!todo.is_done);
                                            }
                                        }
                                    />
                                </Col>
                                <Col s={9}>
                                    {todo.text}
                                </Col>
                                <Col s={2}>
                                    <Button onClick={() => props.deleteRequest(todo.id)} style={{float: "right"}} className="red" small>
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        </CollectionItem>)}
                    </Collection>
                </>
            }
        </>
    );
};

export default UserTodos;