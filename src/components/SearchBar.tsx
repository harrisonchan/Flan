import { useTheme } from '@shopify/restyle'
import React from 'react'
import { RegisteredStyle, TouchableOpacity, ViewStyle, TextInputProps as RNTextInputProps } from 'react-native'
import { Theme } from '../theme'
import Box from './Box'
import TextInput, { TextInputProps } from './TextInput'

interface SearchBarProps {
  textInputProps?: TextInputProps
  rNTextInputProps?: RNTextInputProps
  containerStyle?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { themeConstants } = useTheme<Theme>()
  return (
    <Box width={themeConstants.componentWidthXL} alignSelf="center" borderRadius={10} style={props.containerStyle}>
      <TextInput {...props.textInputProps} placeholder="Search here..." textInputProps={props.rNTextInputProps} />
    </Box>
  )
}

export default SearchBar
