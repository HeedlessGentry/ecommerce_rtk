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
reducers: {
    } 
});


