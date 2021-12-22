// imr --> import react short form  
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// outline version --> invisible backgrd
const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large'];
export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    //Automatically assign button to style 0 if not specified
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonStyle}`}
                onClick={onClick}
                type = {type}
            >
                {children}
            </button>

        </Link>
    );

};
