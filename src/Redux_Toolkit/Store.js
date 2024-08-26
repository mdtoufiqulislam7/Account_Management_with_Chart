import { configureStore } from "@reduxjs/toolkit";
import accountTracker from './User_slice';
import monthlyshort from './Monthly';


export const store = configureStore({

    reducer:{
        accounts:accountTracker,
        month :monthlyshort

       
    }
})


export default store