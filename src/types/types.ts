import { ColorValue, RegisteredStyle, StyleProp, TextStyle, ViewStyle } from 'react-native'
import { LatLng } from 'react-native-maps'

export type ColorType = ColorValue | string | undefined
export type ViewStyleType = ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
export type TextStyleType = StyleProp<TextStyle> | undefined
