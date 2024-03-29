import React from 'react'
import { BoxProps, useTheme } from '@shopify/restyle'
import { Theme } from '@theme'
import StatusBarPadding, { StatusBarPaddingProps } from 'components/StatusBarPadding'
import NavigationHeader, { NavigationHeaderProps } from 'components/NavigationHeader'
import Box from './Box'

interface BoxContainerProps {
  boxContainerProps?: BoxProps<Theme>
  statusBarPaddingProps?: StatusBarPaddingProps & {
    isShown?: boolean
  }
  navigationHeaderProps?: NavigationHeaderProps & {
    isShown?: boolean
  }
}

const BoxContainer: React.FC<BoxContainerProps> = (props) => {
  const { themeConstants } = useTheme<Theme>()
  return (
    <>
      {props.statusBarPaddingProps?.isShown !== false && <StatusBarPadding {...props.statusBarPaddingProps} />}
      <Box width={themeConstants.containerWidth} alignSelf="center" marginTop="m" flex={1} {...props.boxContainerProps}>
        {props.navigationHeaderProps?.isShown !== false && <NavigationHeader useLeftGoBackNavigationButton {...props.navigationHeaderProps} />}
        {props.children}
      </Box>
    </>
  )
}

export default BoxContainer
