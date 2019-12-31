import React from 'react';
import './card-dropdown.style.scss';
import CustomButtom from '../custom-buttom/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../card-item/card-item.component';

const CardDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
            }
        </div>
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
)

const mapStateToProps = ({card: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CardDropdown);