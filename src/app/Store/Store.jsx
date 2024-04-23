import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../../Features/Counter/CounterSlice";


const store= configureStore({
    reducer:{
        counter: CounterSlice,
    }
})

export default store;