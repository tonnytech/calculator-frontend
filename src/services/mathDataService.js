import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../helpers/helpers";

export const addMathData = createAsyncThunk(
    'addMathData',
    async (mathData, thunkAPI) => {
        try{
            const response = await axios.post(`${baseUrl}/create`, mathData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({error: error.message});
        }
    }
);

export const getMathData = createAsyncThunk(
    'getMathData',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get(`${baseUrl}/read/all`);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({error: error.message});
        }
    }
);