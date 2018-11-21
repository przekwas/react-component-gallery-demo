import React from 'react';

export const ComponentOne = (props) => {
    return (
        <>
            <h1>I'm Component One!</h1>
            <div>{props.children}</div>
        </>
    );
};