import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import  jobsReducer from './Slice/JobsSlice';
import  jobReducer from './Slice/JobSlice';
import cartReducer from './Slice/cartSlice';
import userReducer from './Slice/userSlice';
import appliesReducer from './Slice/AppliesSlice';
import  applyReducer from './Slice/ApplySlice';


const store = configureStore({
    reducer:{
        jobsState:jobsReducer,
        jobState:jobReducer,
        cartState:cartReducer,
        userState:userReducer,
        appliesState:appliesReducer,
        applyState:appliesReducer
    }
},applyMiddleware(thunk))

export default store