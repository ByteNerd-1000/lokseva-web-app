
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const FadeTransition = ({ children }) => (
    <CSSTransition
        in={true}
        appear={true}
        timeout={500}  // Adjust timing as needed
        classNames="fade"
    >
        {children}
    </CSSTransition>
);

export default FadeTransition;
