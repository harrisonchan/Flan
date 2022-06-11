import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserType = {
  userId: number | string // uses numbers or strings??? idk
  username: string
  userFirstName: string
  userLastName: string
}

interface UserState {
  user: UserType
  isLoggedIn: boolean
}

const initialState = {
  user: {
    userId: 0,
    username: 'Harrison',
    userFirstName: 'Harrison',
    userLastName: 'Chan',
  },
  isLoggedIn: true,
} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<UserType>) {
      state.isLoggedIn = true
      state.user = action.payload
    },
  },
})

export default userSlice
