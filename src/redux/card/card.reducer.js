const INITIAL_STATE = {
    hidden: true
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CARD_DROPDOWN' : {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
        default :
            return state;
    }
}

export default cardReducer;