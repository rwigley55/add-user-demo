import React from 'react';

import classes from './Card.module.css';

const Card = props => {
    //Card component should output what's inside opening & closing tags of <Card></Card>, so you need props.children to do that
    //props.children will give us the content that's passed between the opening and closing tags of the component
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;