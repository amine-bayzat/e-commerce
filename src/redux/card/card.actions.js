export const ToggleCardDropdown = () => ({
    type: 'TOGGLE_CARD_DROPDOWN'
});

export const AddItem = item => ({
    type: 'ADD_ITEM',
    payload: item
});

export const RemoveItemFromCart = item => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: item
});

export const RemoveItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
});