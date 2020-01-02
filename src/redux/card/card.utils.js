export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check first inside the exising array "cartItems.id" if the new "cartItemToAdd.id" is exists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // if it does then we have to return a new array that has the existing items plus the new attribute "quantity" + 1
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    // if it doesn't then we have to return the existing items array with an initial "quantity" = 1 when we store them
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
}