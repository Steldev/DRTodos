import React from 'react'

const ErrorList = (props) => {
    let errors = props.errors;
    if (props.errors) errors.map(error => {
            if (Array.isArray(error)) errors = errors.concat(error);
        });
    return (
        <div>
        {errors && errors.length &&
            <ul style={{marginTop: "2rem"}}>
                {errors.map((error, key) => !Array.isArray(error) &&
                    <li className="red-text" key={key}>{error}</li>
                )}
            </ul>
        }
    </div>
    );
};

export default ErrorList;