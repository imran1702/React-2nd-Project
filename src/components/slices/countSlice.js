import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem("cartItemCount")) || 0
  },
  reducers: {
    increment: state => {
      state.value += 1
      localStorage.setItem("cartItemCount", JSON.stringify(state.value))
    },
    decrement: state => {
      state.value -= 1
      localStorage.setItem("cartItemCount", JSON.stringify(state.value))
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = countSlice.actions

export default countSlice.reducer