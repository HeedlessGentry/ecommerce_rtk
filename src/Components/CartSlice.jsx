import {createSlice} from '@reduxjs/toolkit';

//We first initialize an empty array named cartItems outside CartSlice
const initialState = {
    cartItems: [],
};              
//Now initialize CartSlice with one createSlice Redux Toolkit function. You need to install @reduxjs/toolkit and react-redux as a third-party module. For this lab, you do not need to install it separately as it is already provided in the package.json file and createSlice is a utility function provided by Redux Toolkit, a library built on top of Redux. It simplifies the process of creating Redux slices, which are portions of the Redux state, along with associated action creators and reducers
const CartSlice = createSlice({
//You call createSlice with an object containing configuration options for your slice
name: 'cart', 
initialState,
reducers: { //create five functions out of which two are used to handle addition and removal of products in the shopping cart, one to clear all the items at once, and other two are to increase and decrease the quantity.
addItemCart(state, action) { //It takes two parameters: state (current state of the slice) and action (the dispatched action containing the payload).
    const existingItem = state.cartItems.find(item => item.id === action.payload.id); //It first checks if the item already exists in the cart by searching for its ID within state.cartItems.
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cartItems.push({ ...action.payload, quantity: 1});
    }
},
removeItemFromCart(state, action) {
    state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
},
clearCart(state) {
    state.cartItems = [];
},
increaseItemQuantity(state, action) {
    const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
    if (itemToIncrease) {
        itemToIncrease.quantity += 1;
    }
},
decreaseItemQuantity(state, action) {
    const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
    if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
    }
},
} 
});
export const {
    addItemCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;


