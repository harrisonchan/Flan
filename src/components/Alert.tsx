import { useTheme } from '@shopify/restyle'
import React, { ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'
import { appActions } from '../redux/features'
import { Theme } from '../theme'
import Box from './Box'
import Button from './Button'
import Text from './Text'

export interface AlertProps {
  title?: string
  message?: string
  positiveActionProps?: {
    message: string
    action: () => void
  }
  negativeActionProps?: {
    message: string
    action: () => void
  }
  customAlert?: ReactElement
  backgroundPressHidesAlert?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
  //   const [layout, setLayout] = useState({ width: 0, height: 0 })
  const { colors, themeConstants } = useTheme<Theme>()
  const dispatch = useDispatch()
  return (
    <Box position="absolute" width={themeConstants.screenWidth} height={themeConstants.screenHeight} justifyContent="center" alignItems="center">
      <Box
        backgroundColor="subduedText"
        opacity={0.5}
        position="absolute"
        width="100%"
        height="100%"
        onTouchStart={() => {
          if (props.backgroundPressHidesAlert == true) {
            dispatch(appActions.utilityActions.hideAlert())
          }
        }}
      />
      {(props.title || props.message || props.positiveActionProps || props.negativeActionProps) && (
        <Box minWidth={themeConstants.componentWidthL} marginLeft="m" marginRight="m" backgroundColor="lightColor" borderRadius={10} padding="m">
          {props.title && <Text marginBottom="xs">{props.title}</Text>}
          {props.message && (
            <Text variant="secondary" marginBottom="m">
              {props.message}
            </Text>
          )}
          <Box flexDirection="row" justifyContent="space-between">
            {props.positiveActionProps && (
              <Button
                mode="small"
                style={{ backgroundColor: colors.lightGreen }}
                label={props.positiveActionProps.message}
                onPress={() => {
                  props.positiveActionProps?.action && props.positiveActionProps.action()
                }}
              />
            )}
            {props.negativeActionProps && (
              <Button
                mode="small"
                label={props.negativeActionProps.message}
                onPress={() => {
                  props.negativeActionProps?.action && props.negativeActionProps.action()
                }}
              />
            )}
          </Box>
        </Box>
      )}
      {props.customAlert && props.customAlert}
    </Box>
  )
}

export default Alert
