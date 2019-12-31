import { addItemToCart } from './card.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CARD_DROPDOWN' : {
            return {
                ...state,
                hidden: !state.hidden
            }
        }

        case 'ADD_ITEM' : {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        }
        default :
            return state;
    }
}

export default cardReducer;