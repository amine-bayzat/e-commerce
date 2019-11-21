import React from 'react';
import './custom-buttom.style.scss';

const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className="custom-button">{children}</button>
    )
}

export default CustomButton;