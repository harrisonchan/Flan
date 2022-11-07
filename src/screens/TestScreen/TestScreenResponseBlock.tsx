import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Box, Text } from '../../components'
import { Theme } from '../../theme'

interface TestScreenResponseBlockProps {
  response: string
}

const TestScreenResponseBlock: React.FC<TestScreenResponseBlockProps> = (props) => {
  const { themeConstants } = useTheme<Theme>()
  return (
    <Box marginTop="s" minHeight={themeConstants.screenHeight * 0.05} backgroundColor="violet" padding="s">
      <Text variant="secondary">Response</Text>
    </Box>
  )
}

export default TestScreenResponseBlock
