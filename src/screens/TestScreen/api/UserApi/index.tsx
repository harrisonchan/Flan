import { useTheme } from '@shopify/restyle'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Box, Text } from '../../../../components'
import TestScreenGroup from '../../TestScreenGroup'
import TestScreenItem from '../../TestScreenItem'
import { Theme } from '../../../../theme'

const TestScreenUserApi = () => {
  const [response, setResponse] = useState('')
  const { spacing, themeConstants } = useTheme<Theme>()
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
        <TestScreenItem label="Register" onPress={() => console.log('adsfasf')} />
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
