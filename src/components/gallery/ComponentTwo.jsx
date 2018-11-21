import React from 'react';

export const ComponentTwo = (props) => {
    return(
        <>
        <h1>I'm Component Two!</h1>
        <div>{props.children}</div>
    </>
    );
};