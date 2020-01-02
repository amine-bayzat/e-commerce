import React from 'react';
import './card-dropdown.style.scss';

import CustomButtom from '../custom-buttom/custom-button.component';

import { connect } from 'react-redux';
import { ToggleCardDropdown } from '../../redux/card/card.actions';
import { withRouter } from 'react-router-dom';

import CartItem from '../card-item/card-item.component';

const CardDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )
            }
        </div>
        <CustomButtom onClick={() => {
                history.push('/checkout');
                dispatch(ToggleCardDropdown()); // the dispatch method comes with the connect function, so now we can just dispatch a function rather than use mapDispatchToProps
            }
        }
        >GO TO CHECKOUT</CustomButtom>
    </div>
)

const mapStateToProps = ({card: {cartItems}}) => ({
    cartItems
})

export default withRouter(connect(mapStateToProps)(CardDropdown));