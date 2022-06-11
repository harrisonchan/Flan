import { combineReducers } from '@reduxjs/toolkit'
import { counterReducer, userReducer, utilityReducer } from './features'

export const rootReducer = combineReducers({
  counter: counterReducer,
  userReducer: userReducer,
  utilityReducer: utilityReducer,
})

export type RootState = ReturnType<typeof rootReducer>
