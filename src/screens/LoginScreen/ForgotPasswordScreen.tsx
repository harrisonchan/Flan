import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native'
import { Box, Button, StatusBarPadding, Text, TextInput } from '../../components'
import NavigationHeader from '../../components/NavigationHeader'
import { Theme } from '../../theme'
import { AuthenticationStackNavigationProps } from '../../types'

const ForgotPasswordScreen = ({ route, navigation }: AuthenticationStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
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
                Reset Password
              </Text>
              <TextInput
                innerLabel
                label="Email"
                labelColor={colors.primaryColor}
                placeholder="Enter your email to reset your password"
                onChangeText={(input) => console.log(input)}
                containerStyle={{ marginBottom: spacing.l }}
              />
              <Button label="Reset Password" onPress={() => {}} />
            </Box>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        <NavigationHeader
          leftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
          leftIconOnPress={() => navigation.goBack()}
          style={{ position: 'absolute' }}
        />
      </Box>
    </>
  )
}

export default ForgotPasswordScreen
