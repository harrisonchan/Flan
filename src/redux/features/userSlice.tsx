import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLng } from 'react-native-maps'
import { useAppDispatch } from '../hooks'
import { appActions } from './index'
import { remove } from 'lodash'
import { FlanType } from './flanSlice'

export type UserType = {
  userId: number | string // uses numbers or strings??? idk
  username: string
  userFirstName: string
  userLastName: string
  createdFlans: FlanType[]
  savedFlans: FlanType[]
  attendedFlans: FlanType[]
}

interface UserState {
  user: UserType
  isLoggedIn: boolean
  hasPassedIntroduction: boolean
}

const initialUser = {
  userId: 0,
  username: 'Harrison',
  userFirstName: 'Harrison',
  userLastName: 'Chan',
  createdFlans: [],
  savedFlans: [],
  attendedFlans: [],
}

const initialState = {
  user: initialUser,
  isLoggedIn: true,
  hasPassedIntroduction: true,
} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, action: PayloadAction<{ email: string; username: string; password: string }>) {
      state.user = { ...state.user, ...action.payload }
      // TODO: FIX THIS
      state.hasPassedIntroduction = true
      state.isLoggedIn = true
      console.log('reggisters')
      // const dispatch = useAppDispatch()
      // dispatch(
      //   userSlice.actions.loginUser({
      //     userId: '', // uses numbers or strings??? idk
      //     username: action.payload.username,
      //     userFirstName: '',
      //     userLastName: '',
      //     createdFlans: [],
      //     savedFlans: [],
      //     attendedFlans: [],
      //   })
      // )
    },
    loginUser(state, action: PayloadAction<UserType>) {
      state.isLoggedIn = true
      state.user = { ...state.user, ...action.payload }
    },
    logoutUser(state) {
      state.isLoggedIn = false
      state.user = initialUser
    },
    createFlan(state, action: PayloadAction<FlanType>) {
      state.user.createdFlans = [...state.user.createdFlans, action.payload]
    },
    getFlan(state, action: PayloadAction<{ flanId: string | number; flanType: 'created' | 'saved' | 'attended' }>) {
      const { flanType, flanId } = action.payload
      let copy = []
      if (flanType == 'created') {
        copy = state.user.createdFlans
      } else if (flanType == 'saved') {
        copy = state.user.savedFlans
      } else {
        copy = state.user.attendedFlans
      }
      copy.forEach((flan) => {
        if (flanId == flan.id) {
          return flan
        }
      })
    },
    // Accepts FlanId
    deleteFlan(state, action: PayloadAction<string | number>) {
      const flanId = action.payload
      // Can you please write something that isn't this retarded???
      const newArr = []
      for (let i = 0; i < state.user.createdFlans.length; i++) {
        if (state.user.createdFlans[i].id != flanId) {
          newArr.push(state.user.createdFlans[i])
        }
      }
      state.user.createdFlans = newArr
    },
  },
})

export default userSlice
