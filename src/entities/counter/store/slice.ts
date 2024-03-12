import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value++
    },
    decrease: (state) => {
      state.value--
    }
  }
})

export const {actions: counterActions, reducer: counterReducer} = counterSlice;