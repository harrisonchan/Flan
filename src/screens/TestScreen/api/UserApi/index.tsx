import { useTheme } from '@shopify/restyle'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { Box, Text } from '../../../../components'
import TestScreenGroup from '../../TestScreenGroup'
import TestScreenItem from '../../TestScreenItem'
import { Theme } from '../../../../theme'
import { userApiActions } from '../../../../api'

interface TestScreenUserApiProps {
  onResponse: (res: any) => void
}

const TestScreenUserApi: React.FC<TestScreenUserApiProps> = (props) => {
  const [response, setResponse] = useState('')
  const { spacing, themeConstants } = useTheme<Theme>()
  useEffect(() => {
    if (response !== '') {
      props.onResponse(response)
    }
  }, [response])
  return (
    <TestScreenGroup title="User">
      <Box marginTop="s">
        <TextInput
          placeholder="email"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="username"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
        />
        <TestScreenItem
          label="Register"
          onPress={() => {
            // userApiActions.registerUser({
            // })
          }}
        />
      </Box>
      <Box marginTop="s">
        <TextInput
          placeholder="email"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
          autoCapitalize="none"
        />
        <TestScreenItem label="Login" onPress={() => console.log('adsfasf')} />
      </Box>
    </TestScreenGroup>
  )
}

export default TestScreenUserApi
