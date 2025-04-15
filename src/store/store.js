import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from './themeModeSlice'

const store = configureStore({
    reducer:{
        themeMode : themeModeReducer
    }
})

export default store