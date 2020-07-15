import React, { useState } from 'react'
import {Textarea, Button} from 'react-materialize'

const CreateTodo = (props) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.createRequest(text);
        setText("");
    };

    return (
        <form style={{paddingTop: "2rem"}}>
            <Textarea
                data-length={500}
                id="Textarea"
                label="Write something here..."
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={onSubmit} small>
                Add
            </Button>
        </form>
    );
};

export default CreateTodo;