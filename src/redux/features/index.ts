import counterSlice from './counterSlice'
import userSlice from './userSlice'
import utilitySlice from './utilitySlice'

export const counterReducer = counterSlice.reducer
export const userReducer = userSlice.reducer
export const utilityReducer = utilitySlice.reducer

const counterActions = counterSlice.actions
const userActions = userSlice.actions
const utilityActions = utilitySlice.actions

export const appActions = {
  counterActions,
  userActions,
  utilityActions,
}
