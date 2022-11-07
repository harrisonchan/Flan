import React from 'react'
import { useFormik } from 'formik'
import { Text } from 'react-native'
import { Box, Button, StatusBarPadding, TextInput } from '../../../components'
import { IntrodutionStackNavigationProps, userType } from '../../../types'
import { Theme } from '../../../theme'
import { signupDetailsValidationSchema } from '../../../utilities'
import { isString } from 'lodash'
import { useTheme } from '@shopify/restyle'
import { useDispatch } from 'react-redux'
import { userApiActions } from '../../../api'
import { appActions } from '../../../redux/features'
import { UserType } from '../../../redux/features/userSlice'

const SignUpScreenDetails = ({
  route,
  navigation,
}: IntrodutionStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
    },
    validationSchema: signupDetailsValidationSchema,
    onSubmit: () => handleSignUp(),
  })
  const handleSignUp = () => {
    try {
      const user = { ...route.params?.user, ...formik.values }
      const response: UserType = userApiActions.registerUser(user)
      if (response != undefined) {
        dispatch(appActions.userActions.loginUser(response))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <StatusBarPadding />
      <Box>
        <Text>hello sign up screen details</Text>
        {route.params && <Text>{JSON.stringify(route.params)}</Text>}
        <TextInput
          innerLabel
          label="First Name"
          labelColor={colors.primaryColor}
          placeholder="Enter your first name"
          onChangeText={formik.handleChange('firstName')}
          onBlur={formik.handleBlur('firstName')}
          useValidation={{
            isValid: !isString(formik.errors.firstName),
            showValidationIcon: formik.touched.firstName,
            invalidInputMessage: formik.touched.firstName
              ? formik.errors.firstName
              : undefined,
          }}
          containerStyle={{ marginBottom: spacing.l }}
          textInputProps={{ autoCapitalize: 'none', spellCheck: false }}
        />
        <TextInput
          innerLabel
          label="Last Name"
          labelColor={colors.primaryColor}
          placeholder="Enter your last name"
          onChangeText={formik.handleChange('lastName')}
          onBlur={formik.handleBlur('lastName')}
          useValidation={{
            isValid: !isString(formik.errors.lastName),
            showValidationIcon: formik.touched.lastName,
            invalidInputMessage: formik.touched.lastName
              ? formik.errors.lastName
              : undefined,
          }}
          containerStyle={{ marginBottom: spacing.l }}
          textInputProps={{ autoCapitalize: 'none', spellCheck: false }}
        />
        <TextInput
          innerLabel
          label="Birthday"
          labelColor={colors.primaryColor}
          placeholder="Enter your birthday"
          onChangeText={formik.handleChange('birthday')}
          onBlur={formik.handleBlur('birthday')}
          useValidation={{
            isValid: !isString(formik.errors.birthday),
            showValidationIcon: formik.touched.birthday,
            invalidInputMessage: formik.touched.birthday
              ? formik.errors.birthday
              : undefined,
          }}
          containerStyle={{ marginBottom: spacing.l }}
          textInputProps={{ autoCapitalize: 'none', spellCheck: false }}
        />
        <TextInput
          innerLabel
          label="Gender"
          labelColor={colors.primaryColor}
          placeholder="Enter your gender"
          onChangeText={formik.handleChange('gender')}
          onBlur={formik.handleBlur('gender')}
          useValidation={{
            isValid: !isString(formik.errors.gender),
            showValidationIcon: formik.touched.gender,
            invalidInputMessage: formik.touched.gender
              ? formik.errors.gender
              : undefined,
          }}
          containerStyle={{ marginBottom: spacing.l }}
          textInputProps={{ autoCapitalize: 'none', spellCheck: false }}
        />
        <Button label="Sign Up" onPress={formik.submitForm} />
      </Box>
    </>
  )
}

export default SignUpScreenDetails
