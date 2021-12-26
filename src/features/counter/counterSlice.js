import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk(
  'counter/fetchIncrement',
  async (value) => {
    const response = await axios.put('https://localhost:3000/counter/increment', { value: value })
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value++
    },
    decrement: state => {
      state.value--
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    [fetchIncrement.fulfilled]: (state, action) => {
      state.value = action.payload.value
    }
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer