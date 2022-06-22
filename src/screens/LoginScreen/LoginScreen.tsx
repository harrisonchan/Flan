import { useTheme } from '@shopify/restyle'
import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Box, Button, StatusBarPadding, Text, TextInput } from '../../components'
import { appActions } from '../../redux/features'
import { Theme } from '../../theme'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const handleLogin = () => {
    dispatch(appActions.userActions.loginUser({ userFirstName: 'boop' }))
  }
  return (
    <>
      <StatusBarPadding />
      <Box width={themeConstants.containerWidth} flex={1} alignSelf="center">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={{ flex: 1, paddingBottom: spacing.xl, justifyContent: 'center' }}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <Box>
              <Text variant="header3" color="neutralText" marginBottom="l" style={{ alignSelf: 'center' }}>
                Login
              </Text>
              <TextInput
                innerLabel
                label="Username"
                labelColor={colors.primaryColor}
                placeholder="Enter your username"
                onChangeText={(input) => console.log(input)}
                containerStyle={{ marginBottom: spacing.l }}
              />
              <TextInput
                innerLabel
                label="Password"
                labelColor={colors.primaryColor}
                placeholder="Enter your password"
                onChangeText={(input) => console.log(input)}
                containerStyle={{ marginBottom: spacing.l }}
              />
              <Button label="Login" onPress={handleLogin} />
            </Box>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Box>
    </>
  )
}

export default LoginScreen
