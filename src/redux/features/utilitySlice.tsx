import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useColorScheme } from 'react-native'

type ColorSchemeType = 'light' | 'dark'

interface UtilityState {
  colorScheme: ColorSchemeType
  hasPassedIntroduction: boolean
}

const initialState = {
  colorScheme: 'light',
  hasPassedIntroduction: false,
} as UtilityState

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setColorScheme(state, action: PayloadAction<ColorSchemeType>) {
      state.colorScheme = action.payload
    },
    setIntroductionPassageStatus(state, action: PayloadAction<boolean>) {
      state.hasPassedIntroduction = action.payload
    },
  },
})

export default utilitySlice
