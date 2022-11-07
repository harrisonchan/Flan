import React from 'react'
import { Box, Text } from '../../components'

interface TestScreenGroupProps {
  title: string
}

const TestScreenGroup: React.FC<TestScreenGroupProps> = (props) => {
  return (
    <Box padding="xs" paddingLeft="s" paddingRight="s">
      <Text variant="body" fontWeight="bold">
        {props.title}
      </Text>
      {props.children}
    </Box>
  )
}

export default TestScreenGroup
