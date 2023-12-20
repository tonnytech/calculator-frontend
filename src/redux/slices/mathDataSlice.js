import { createSlice } from '@reduxjs/toolkit';
import { addMathData, getMathData } from '../../services/mathDataService';

const initialState = {
  addingMathLoading: false,
  addingMathData: null,
  addingMathError: null,
  gettingMathLoading: false,
  gettingMathData: [],
  gettingMathError: null,
  mathDataPresent: false,
};

const mathSlice = createSlice({
  name: 'mathData',
  initialState,
  reducers: {
    setMathState: (state, action) => {
      state.mathDataPresent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMathData.pending, (state) => {
        state.addingMathLoading = true;
        state.addingMathError = null;
      })
      .addCase(addMathData.fulfilled, (state, action) => {
        state.addingMathLoading = false;
        state.addingMathData = action.payload;
        state.addingMathError = null;
      })
      .addCase(addMathData.rejected, (state, action) => {
        state.addingMathLoading = false;
        state.addingMathData = null;
        state.registrationError = action.payload;
      });

    builder
      .addCase(getMathData.pending, (state) => {
        state.gettingMathLoading = true;
        state.gettingMathError = null;
      })
      .addCase(getMathData.fulfilled, (state, action) => {
        state.gettingMathLoading = false;
        state.gettingMathData = action.payload;
        state.gettingMathError = null;
      })
      .addCase(getMathData.rejected, (state, action) => {
        state.gettingMathLoading = false;
        state.gettingMathData = null;
        state.gettingMathError = action.payload;
      });
  },
});

export const { setMathState } = mathSlice.actions;

export default mathSlice.reducer;
