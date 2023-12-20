import { configureStore } from "@reduxjs/toolkit";
import mathSlice from './slices/mathDataSlice';


const store = configureStore({
    reducer: {
      mathData: mathSlice,
    },
  });
  
  export default store;