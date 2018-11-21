import React from 'react';

export const ComponentThree = (props) => {
    return(
        <>
        <h1>I'm Component Three!</h1>
        <div>{props.children}</div>
    </>
    );
};