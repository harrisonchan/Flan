import React from 'react'
import { useFormik } from 'formik'
import { Text } from 'react-native'
import { Box, StatusBarPadding, TextInput } from '../../../components'
import { IntrodutionStackNavigationProps } from '../../../types'
import { Theme } from '../../../theme'
import { useTheme } from '@react-navigation/native'
import { signupDetailsValidationSchema } from '../../../utilities'
import { isString } from 'lodash'

const SignUpScreenDetails = ({ route, navigation }: IntrodutionStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: signupDetailsValidationSchema,
    onSubmit: () => handleSignUp(),
  })
  const handleSignUp = () => {}
  return (
    <>
      <StatusBarPadding />
      <Box>
        <Text>hello sign up screen details</Text>
        {route.params && <Text>{JSON.stringify(route.params)}</Text>}
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
      </Box>
    </>
  )
}

export default SignUpScreenDetails
