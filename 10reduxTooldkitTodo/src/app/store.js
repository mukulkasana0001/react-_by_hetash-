// import {configureStore} from   '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice.js'

// export const  store = configureStore({
//     reducer: todoReducer
// })



import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})