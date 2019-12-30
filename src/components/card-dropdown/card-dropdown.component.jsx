import React from 'react';
import './card-dropdown.style.scss';
import CustomButtom from '../custom-buttom/custom-button.component';


const CardDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
)



export default CardDropdown;