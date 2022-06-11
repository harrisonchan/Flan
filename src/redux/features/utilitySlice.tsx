import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useColorScheme } from 'react-native'

type ColorSchemeType = 'light' | 'dark'

interface UtilityState {
  colorScheme: ColorSchemeType
}

const initialState = {
  colorScheme: 'light',
} as UtilityState

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setColorScheme(state, action: PayloadAction<ColorSchemeType>) {
      state.colorScheme = action.payload
    },
  },
})

export default utilitySlice
