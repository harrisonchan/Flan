import { useTheme } from '@shopify/restyle'
import React, { useState } from 'react'
import { Theme } from '../theme'
import Box from './Box'
import Button from './Button'
import Text from './Text'

export interface AlertProps {
  title: string
  message: string
  positiveActionProps: {
    message: string
    action: () => void
  }
  negativeActionProps: {
    message: string
    action: () => void
  }
}

const Alert: React.FC<AlertProps> = (props) => {
  //   const [layout, setLayout] = useState({ width: 0, height: 0 })
  const { colors, themeConstants } = useTheme<Theme>()
  return (
    <Box
      position="absolute"
      width={themeConstants.screenWidth}
      height={themeConstants.screenHeight}
      justifyContent="center"
      alignItems="center">
      <Box backgroundColor="subduedText" opacity={0.5} position="absolute" width="100%" height="100%" />
      <Box
        minWidth={themeConstants.componentWidthL}
        marginLeft="m"
        marginRight="m"
        backgroundColor="lightColor"
        borderRadius={10}
        padding="m">
        <Text marginBottom="xs">{props.title}</Text>
        <Text variant="secondary" marginBottom="m">
          {props.message}
        </Text>
        <Box flexDirection="row" justifyContent="space-between">
          <Button
            mode="small"
            style={{ backgroundColor: colors.lightGreen }}
            label={props.positiveActionProps.message}
            onPress={() => props.positiveActionProps.action()}
          />
          <Button
            mode="small"
            label={props.negativeActionProps.message}
            onPress={() => props.negativeActionProps.action()}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Alert
