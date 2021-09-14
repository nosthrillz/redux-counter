import { createSlice } from '@reduxjs/toolkit'

const INITIAL_COUNTER = 0;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: INITIAL_COUNTER,
    max: INITIAL_COUNTER,
    min: INITIAL_COUNTER
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
        state.value -= action.payload
    },
    reset: (state) => {
        state.value = INITIAL_COUNTER;
    },
    setMax: (state) => {
        state.max = state.value
    },
    setMin: (state) => {
        state.min = state.value
    }
  }
})

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
    setMax,
    setMin
} = counterSlice.actions

export default counterSlice.reducer