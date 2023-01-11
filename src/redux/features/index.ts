import counterSlice from './counterSlice'
import flanSlice from './flanSlice'
import userSlice from './userSlice'
import utilitySlice from './utilitySlice'
export * from './counterSlice'
export * from './flanSlice'
export * from './userSlice'
export * from './utilitySlice'

export const counterReducer = counterSlice.reducer
export const flanReducer = flanSlice.reducer
export const userReducer = userSlice.reducer
export const utilityReducer = utilitySlice.reducer

const counterActions = counterSlice.actions
const flanActions = flanSlice.actions
const userActions = userSlice.actions
const utilityActions = utilitySlice.actions

export const appActions = {
  counterActions,
  flanActions,
  userActions,
  utilityActions,
}
