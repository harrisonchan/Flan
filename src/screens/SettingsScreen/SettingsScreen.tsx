import { backgroundColor, useTheme } from '@shopify/restyle'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, NavigationHeader, StatusBarPadding, Text } from '../../components'
import Button, { ButtonProps } from '../../components/Button'
import { useAppSelector } from '../../redux'
import { appActions } from '../../redux/features'
import { Theme } from '../../theme'
import { SettingsStackNavigationProps } from '../../types'

interface SettingsRowItemProps {
  title: string
  description: string
  buttonProps?: ButtonProps
}

const SettingsRowItem: React.FC<SettingsRowItemProps> = (props) => {
  const { themeConstants } = useTheme<Theme>()
  return (
    <Box flexDirection="row" width="100%" justifyContent="space-between" alignItems="center" marginBottom="m">
      <Box maxWidth={themeConstants.componentWidthM}>
        <Text variant="body">{props.title}</Text>
        <Text variant="secondary">{props.description}</Text>
      </Box>
      <Button {...props.buttonProps} />
    </Box>
  )
}

const SettingsScreen = ({ route, navigation }: SettingsStackNavigationProps) => {
  const { colors, themeConstants } = useTheme<Theme>()
  const dispatch = useDispatch()
  const colorScheme = useAppSelector((state) => state.utilityReducer.colorScheme)
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)
  return (
    <>
      <StatusBarPadding />
      <Box width={themeConstants.containerWidth} alignSelf="center" marginTop="xl">
        {isLoggedIn && (
          <NavigationHeader
            rightIconProps={{ name: 'close', size: themeConstants.headerIconSize, color: colors.darkColor }}
            rightIconOnPress={() => navigation.pop()}
          />
        )}
        <Text variant="header3" marginBottom="l">
          Settings
        </Text>
        <SettingsRowItem
          title="Account"
          description={isLoggedIn ? 'Sign Out of Account' : 'Sign Up or Log In to your Account'}
          buttonProps={{
            label: isLoggedIn ? 'Sign Out' : 'Sign Up / Log In',
            mode: 'small',
            onPress: isLoggedIn
              ? () => dispatch(appActions.userActions.logoutUser())
              : () => navigation.navigate('SignUpScreenInitial'),
            style: { backgroundColor: isLoggedIn ? colors.red : colors.green },
          }}
        />
        <SettingsRowItem
          title="Theme"
          description="Toggle Theme"
          buttonProps={{
            label: 'Toggle',
            mode: 'small',
            onPress: () =>
              dispatch(appActions.utilityActions.setColorScheme(colorScheme == 'light' ? 'dark' : 'light')),
            style: { backgroundColor: colors.green },
          }}
        />
        <SettingsRowItem
          title="Language"
          description="Toggle Language"
          buttonProps={{
            label: 'Toggle',
            mode: 'small',
            onPress: () => {},
            style: { backgroundColor: colors.green },
          }}
        />
      </Box>
      {/* Logout/Login
      Switch Theme
      Change Language
      Credits */}
    </>
  )
}

export default SettingsScreen
