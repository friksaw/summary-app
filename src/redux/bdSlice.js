import { createSlice } from '@reduxjs/toolkit';
import {index} from "../data";


export const bdSlice = createSlice({
    name: 'bdCounter',
    initialState: {
        bd: 0,
    },

    reducers: {
        changeBD: (state, city) => {
            const now = new Date();

            let countYear = now.getFullYear() - 2004;
            let countMonth = now.getMonth() - 2;
            let countDate = now.getDate() - 20;
            let countHours = now.getHours();
            let countMinutes = now.getMinutes();
            let countSeconds = now.getSeconds();

            state.bd = `${countYear}.${countMonth}${countDate}${countHours}${countMinutes}${countSeconds}`;
        },
    },
});

export const { changeBD } = bdSlice.actions;

export const changeBDAsync = () => dispatch => {
    setInterval(() => {
        dispatch(changeBD());
    }, 10);
};

export const selectBD = state => state.bd;

export default bdSlice.reducer;

