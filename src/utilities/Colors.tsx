import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View, Text, useColorScheme, ColorValue } from 'react-native'
import { colorPalette as themeColorPalette } from '../theme'

// export const Colors = () => {
//   return (
//     <View style={appStyles.styles.centerContainer}>
//       <ColorSquare color={appStyles.colors.primaryDark} />
//       <ColorSquare color={appStyles.colors.secondaryDark} />
//       <ColorSquare color={appStyles.colors.primaryLight} />
//       <ColorSquare color={appStyles.colors.secondaryLight} />
//       <ColorSquare color={appStyles.colors.primary} />
//       <ColorSquare color={appStyles.colors.secondary} />
//       <ColorSquare color={appStyles.colors.tertiary} />
//     </View>
//   )
// }

const ColorSquare = (props: { color: string }) => {
  return (
    <>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: props.color,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
          margin: 5,
        }}
      />
      <Text>{props.color}</Text>
    </>
  )
}

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
  return `#${randomColor}`
}

export const generateRandomColorFromPalette = (colorPalette?: Object) => {
  const {
    dark,
    lightGrey,
    grey,
    darkGrey,
    light,
    darkAqua,
    darkGreen,
    darkRed,
    darkSand,
    darkViolet,
    violet,
    ...themeColorPaletteWithoutGreys
  } = themeColorPalette
  const colors = Object.values(colorPalette ? colorPalette : themeColorPaletteWithoutGreys).map((color) => {
    return color
  })
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return randomColor
}
