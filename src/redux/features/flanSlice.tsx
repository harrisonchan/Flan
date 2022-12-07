import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLng } from 'react-native-maps'
import { UserType } from './userSlice'

export type LocationType = { address: string; coordinate: LatLng | undefined }
export type ActivityType = { title: string; description?: string }

export type FlanType = {
  // id: string
  title?: string
  description?: string
  author?: string
  illustration?: number
  peopleAttending?: { username: string; userFirstName: string; userLastName: string }[]
  location?: LocationType
  activities?: ActivityType[]
  polls?: { pollTitle: string; pollOptions: { pollOptionTitle: string; pollOptionVotes: number }[] }[]
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
