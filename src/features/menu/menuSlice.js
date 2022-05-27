import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeMenu: true,
}


const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.activeMenu = !state.activeMenu
        }
    }
});


export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer