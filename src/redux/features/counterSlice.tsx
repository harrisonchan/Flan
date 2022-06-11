import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  counterValue: number
}

const initialState = { counterValue: 100 } as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counterValue++
    },
    decrement(state) {
      state.counterValue--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.counterValue += action.payload
    },
    decrementByAmount(state, action: PayloadAction<number>) {
      state.counterValue -= action.payload
    },
  },
})

// export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions
// export const counterReducer = counterSlice.reducer

export default counterSlice
