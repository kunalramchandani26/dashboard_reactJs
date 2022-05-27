import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}


const navbtnSlice = createSlice({
    name: 'navbtn',
    initialState,
    reducers: {
        toggleChat: (state) => {
            state.chat = !state.chat
        },
        toggleCart: (state) => {
            state.cart = !state.cart
        },
        toggleUserProfile: (state) => {
            state.userProfile = !state.userProfile
        },
        toggleNotification: (state) => {
            state.notification = !state.notification
        },
    }
});

export const { toggleChat } = navbtnSlice.actions;
export const { toggleCart } = navbtnSlice.actions;
export const { toggleUserProfile } = navbtnSlice.actions;
export const { toggleNotification } = navbtnSlice.actions;

export default navbtnSlice.reducer