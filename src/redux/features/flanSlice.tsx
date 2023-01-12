import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FlanType } from '@types'
import { LatLng } from 'react-native-maps'
import { UserType } from './userSlice'

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

export default flanSlice
