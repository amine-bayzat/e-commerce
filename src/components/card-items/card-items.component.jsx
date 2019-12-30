import React from 'react';
import './card-items.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ToggleCardDropdown } from '../../redux/card/card.actions';
import { connect } from 'react-redux';
 
const CardItem = ({ToggleCardDropdown}) => (
    <div className="cart-icon" onClick={ToggleCardDropdown}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCardDropdown: () => dispatch(ToggleCardDropdown())
})

export default connect(null, mapDispatchToProps)(CardItem);