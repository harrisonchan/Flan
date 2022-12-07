import { useTheme } from '@shopify/restyle'
import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../../../components'
import TestScreenGroup from '../../TestScreenGroup'
import TestScreenItem from '../../TestScreenItem'
import { Theme } from '../../../../theme'
import { userApiActions } from '../../../../api'
import { Formik, useFormik } from 'formik'
import { loginValidationSchema, signupDetailsValidationSchema, signupInitialValidationSchema } from '../../../../utilities'

interface TestScreenUserApiProps {
  onResponse: (res: any) => void
}

const TestScreenUserApi: React.FC<TestScreenUserApiProps> = (props) => {
  const [response, setResponse] = useState<any>('')
  const { spacing, themeConstants } = useTheme<Theme>()
  useEffect(() => {
    if (response !== '') {
      props.onResponse(response)
    }
  }, [response])
  const registerFormik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      birthday: '',
      accountType: '',
      gender: '',
    },
    validationSchema: signupInitialValidationSchema.concat(signupDetailsValidationSchema),
    onSubmit: () => submitRegister(),
  })
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: () => submitLogin(),
  })
  const submitRegister = async () => {
    console.log('Test Screen Registering...')
    const { email, username, password, firstName, lastName, birthday, accountType, gender } = registerFormik.values
    userApiActions
      .registerUser({
        email,
        username,
        password,
        firstName,
        lastName,
        birthday,
        accountType,
        gender,
      })
      .then((response) => {
        setResponse(response)
      })
      .catch((err) => console.log(err))
  }
  const submitLogin = async () => {
    console.log('Test Screen Logging in...')
    const { email, password } = loginFormik.values
    userApiActions
      .loginUser({ email, password })
      .then((response) => {
        setResponse(response)
      })
      .catch((err) => console.log(err))
  }
  return (
    <TestScreenGroup title="User">
      <Box marginTop="s">
        <Text variant="tertiary" color="red">
          {JSON.stringify(registerFormik.errors)}
        </Text>
        <TextInput
          placeholder="email"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={registerFormik.handleChange('email')}
        />
        <TextInput
          placeholder="username"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={registerFormik.handleChange('username')}
        />
        <TextInput
          placeholder="password"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={registerFormik.handleChange('password')}
        />
        <TextInput
          placeholder="firstName"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={registerFormik.handleChange('firstName')}
        />
        <TextInput
          placeholder="lastName"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={registerFormik.handleChange('lastName')}
        />
        <TextInput
          placeholder="birthday"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={registerFormik.handleChange('birthday')}
        />
        <TextInput
          placeholder="accountType"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={registerFormik.handleChange('accountType')}
        />
        <TextInput
          placeholder="gender"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={registerFormik.handleChange('gender')}
        />
        <TestScreenItem label="Register" onPress={registerFormik.submitForm} />
      </Box>
      <Box marginTop="s">
        <Text variant="tertiary" color="red">
          {JSON.stringify(loginFormik.errors)}
        </Text>
        <TextInput
          placeholder="email"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={loginFormik.handleChange('email')}
        />
        <TextInput
          placeholder="password"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
          onChangeText={loginFormik.handleChange('password')}
        />
        <TestScreenItem label="Login" onPress={() => loginFormik.submitForm()} />
      </Box>
    </TestScreenGroup>
  )
}

export default TestScreenUserApi
