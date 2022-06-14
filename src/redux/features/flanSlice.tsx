import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from './userSlice'

export type FlanType = {
  id: number
  title: string
  peopleAttending: { username: string; userFirstName: string; userLastName: string }[]
  location: string
  activities: { activityTitle: string; activityDescription: string }[]
  polls: { pollTitle: string; pollOptions: { pollOptionTitle: string; pollOptionVotes: number }[] }[]
  //   chat: string
}

interface FlanState {
  flan: FlanType
}

const initialState = {
  flan: {},
} as FlanState

const flanSlice = createSlice({
  name: 'flan',
  initialState,
  reducers: {
    //create Flan
    //edit Flan
    //clear state
  },
})
