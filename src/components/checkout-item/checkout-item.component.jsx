import React from 'react';
import './checkout-item.style.scss';

import { connect } from 'react-redux';
import { RemoveItemFromCart, RemoveItem, AddItem } from '../../redux/card/card.actions';

const CheckoutItem = ({cartItem, removeItemFromCart, removeItem, addItem}) => {
    const {name, price, quantity, imageUrl} = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"></img>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => removeItemFromCart(cartItem)}>&#10005;</span>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(RemoveItemFromCart(item)),
    removeItem: item => dispatch(RemoveItem(item)),
    addItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);