import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menu/menuSlice';
import navbtnReducer from './features/navbtn/navbtnSlice';


export const store = configureStore({
    reducer: {
        menu: menuReducer,
        navbtn: navbtnReducer,
    },
});