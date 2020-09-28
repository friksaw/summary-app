import { configureStore } from '@reduxjs/toolkit';
import bdReducer from './redux/bdSlice';

export default configureStore({
    reducer: {
        bd: bdReducer,
    },
});