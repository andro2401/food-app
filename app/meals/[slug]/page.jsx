import React from 'react';

const SingleMeal = ({params}) => {
    return (
        <>
            <h1>Single meal page</h1>
            <p>{params.slug}</p>
        </>
    );
};

export default SingleMeal;
