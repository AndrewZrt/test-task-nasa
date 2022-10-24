import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainReducer from './reducers/mainSlice';

const rootReducer = combineReducers({
    mainReducer
})

export const store = configureStore({
    reducer:rootReducer
})

