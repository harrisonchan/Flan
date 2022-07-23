import { useTheme } from '@shopify/restyle'
import { useFormik } from 'formik'
import { isString } from 'lodash'
import React, { useEffect, useState } from 'react'
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Box, Button, StatusBarPadding, Text, TextInput } from '../../components'
import { appActions } from '../../redux/features'
import { Theme } from '../../theme'
import { IntrodutionStackNavigationProps } from '../../types'
import { signupValidationSchema } from '../../utilities'

const SignUpScreen = ({ navigation }: IntrodutionStackNavigationProps) => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const handleLogin = () => {
    dispatch(appActions.userActions.registerUser(formik.values))
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: () => {},
  })
  useEffect(() => {
    console.log(formik.values)
    console.log(formik.errors)
  }, [formik])
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
                Sign Up
              </Text>
              <TextInput
                innerLabel
                label="Email"
                labelColor={colors.primaryColor}
                placeholder="Enter your email"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                useValidation={{
                  isValid: !isString(formik.errors.email),
                  showsIcon: formik.touched.email,
                  invalidInputMessage: formik.touched.email ? formik.errors.email : undefined,
                }}
                containerStyle={{ marginBottom: spacing.l }}
              />
              <TextInput
                innerLabel
                label="Username"
                labelColor={colors.primaryColor}
                placeholder="Enter your username"
                onChangeText={formik.handleChange('username')}
                onBlur={formik.handleBlur('username')}
                containerStyle={{ marginBottom: spacing.l }}
                useValidation={{
                  isValid: !isString(formik.errors.username),
                  showsIcon: formik.touched.username,
                  invalidInputMessage: formik.touched.username ? formik.errors.username : undefined,
                }}
              />
              <TextInput
                innerLabel
                label="Password"
                labelColor={colors.primaryColor}
                placeholder="Enter your password"
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                containerStyle={{ marginBottom: spacing.l }}
                useValidation={{
                  isValid: !isString(formik.errors.password),
                  showsIcon: formik.touched.password,
                  invalidInputMessage: formik.touched.password ? formik.errors.password : undefined,
                }}
                secureTextEntry
                secureTextEntryShowHideIcon
              />
              <Button label="Sign Up" onPress={handleLogin} />
              <TouchableOpacity
                style={{ alignSelf: 'center', marginTop: spacing.s }}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text variant="tertiary">
                  Already have an account?{' '}
                  <Text variant="tertiary" color="tertiaryColor">
                    Login here
                  </Text>
                </Text>
              </TouchableOpacity>
            </Box>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Box>
    </>
  )
}

export default SignUpScreen
