import {configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import kudosReducer from '../features/kudos/kudosSlice';

export const store = configureStore({
    reducer:{
        login:loginReducer,
        kudos:kudosReducer
    
    }
})