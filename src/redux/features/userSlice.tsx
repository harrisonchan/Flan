import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLng } from 'react-native-maps'

export type LocationType = { address: string; coordinate: LatLng | undefined }
export type ActivityType = { title: string; description?: string }

export type FlanType = {
  id: number
  title?: string
  description?: string
  illustration?: number
  peopleAttending?: { username: string; userFirstName: string; userLastName: string }[]
  location?: LocationType
  activities?: ActivityType[]
  polls?: { pollTitle: string; pollOptions: { pollOptionTitle: string; pollOptionVotes: number }[] }[]
  //   chat: string
}

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
}

const initialState = {
  user: {
    userId: 0,
    username: 'Harrison',
    userFirstName: 'Harrison',
    userLastName: 'Chan',
    createdFlans: [],
    savedFlans: [],
    attendedFlans: [],
  },
  isLoggedIn: false,
} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, action: PayloadAction<{ email: string; username: string; password: string }>) {
      console.log('registerUser')
    },
    loginUser(state, action: PayloadAction<UserType>) {
      state.isLoggedIn = true
      state.user = action.payload
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
  },
})

export default userSlice
