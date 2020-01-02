import React from 'react';
import './card-items.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ToggleCardDropdown } from '../../redux/card/card.actions';
import { connect } from 'react-redux';
 
const CardItem = ({ToggleCardDropdown, itemCount}) => (
    <div className="cart-icon" onClick={ToggleCardDropdown}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = ({card: {cartItems}}) => ({
    itemCount: cartItems.reduce(
        (accumelatedQuantity, cartItem) => accumelatedQuantity + cartItem.quantity
    , 0)
})

const mapDispatchToProps = dispatch => ({
    ToggleCardDropdown: () => dispatch(ToggleCardDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);