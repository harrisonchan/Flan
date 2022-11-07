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
import { Box, Button, StatusBarPadding, Text, TextInput } from '../../../components'
import { appActions } from '../../../redux/features'
import { Theme } from '../../../theme'
import { IntrodutionStackNavigationProps } from '../../../types'
import { signupInitialValidationSchema } from '../../../utilities'

const SignUpScreenInitial = ({ navigation }: IntrodutionStackNavigationProps) => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const handleSignUp = () => {
    // navigation.navigate('SignUpScreenDetails', { formik: formik.values })
    // dispatch(appActions.userActions.registerUser(formik.values))
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: signupInitialValidationSchema,
    onSubmit: () => handleSignUp(),
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
                  showValidationIcon: formik.touched.email,
                  invalidInputMessage: formik.touched.email ? formik.errors.email : undefined,
                }}
                containerStyle={{ marginBottom: spacing.l }}
                textInputProps={{ autoCapitalize: 'none', spellCheck: false }}
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
                  showValidationIcon: formik.touched.username,
                  invalidInputMessage: formik.touched.username ? formik.errors.username : undefined,
                }}
                textInputProps={{ autoCapitalize: 'none', spellCheck: false }}
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
                  showValidationIcon: false,
                  invalidInputMessage: formik.touched.password ? formik.errors.password : undefined,
                }}
                secureTextEntry
                secureTextEntryShowHideIcon
                textInputProps={{ autoCapitalize: 'none', spellCheck: false }}
              />
              <Button label="Sign Up" onPress={formik.submitForm} />
              <Box justifyContent="center" alignItems="center" flexDirection="row" marginTop="s">
                <Text variant="tertiary">Already have an account? </Text>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}
                  onPress={() => navigation.navigate('LoginScreen')}>
                  <Text variant="tertiary" color="tertiaryColor">
                    Login here
                  </Text>
                </TouchableOpacity>
              </Box>
            </Box>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Box>
    </>
  )
}

export default SignUpScreenInitial
