import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useColorScheme } from 'react-native'
import { AlertProps } from '../../components/Alert'

type ColorSchemeType = 'light' | 'dark'

interface UtilityState {
  colorScheme: ColorSchemeType
  alert: {
    isShowing: boolean
    alertProps: AlertProps
  }
}

const initialState = {
  colorScheme: 'light',
  alert: {
    isShowing: false,
    alertProps: {
      title: '',
      message: '',
      positiveActionProps: { message: '', action: () => {} },
      negativeActionProps: { message: '', action: () => {} },
      backgroundPressHidesAlert: false,
    },
  },
} as UtilityState

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setColorScheme(state, action: PayloadAction<ColorSchemeType>) {
      state.colorScheme = action.payload
    },
    showAlert(state, action: PayloadAction<AlertProps>) {
      state.alert.isShowing = true
      state.alert.alertProps = action.payload
    },
    hideAlert(state) {
      state.alert.isShowing = false
      state.alert.alertProps = {
        message: '',
        title: '',
        positiveActionProps: { message: '', action: () => {} },
        negativeActionProps: { message: '', action: () => {} },
        backgroundPressHidesAlert: false,
      }
    },
  },
})

export default utilitySlice
