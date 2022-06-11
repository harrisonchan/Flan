import { useTheme } from '@shopify/restyle'
import React from 'react'
import { ColorValue, Falsy, RecursiveArray, RegisteredStyle, View, ViewStyle } from 'react-native'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import { colorPalette, Theme } from '../theme'

interface StatusBarPaddingProps {
  backgroundColor?: ColorValue
}

const StatusBarPadding: React.FC<StatusBarPaddingProps> = (props) => {
  const { colors } = useTheme<Theme>()
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View
          style={{
            paddingTop: insets ? insets.top : 0,
            backgroundColor: props.backgroundColor ? props.backgroundColor : colors.mainBackground,
          }}
        />
      )}
    </SafeAreaInsetsContext.Consumer>
  )
}

export default StatusBarPadding
