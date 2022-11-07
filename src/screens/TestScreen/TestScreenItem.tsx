import { useTheme } from '@shopify/restyle'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Button, Text } from '../../components'
import { Theme } from '../../theme'

interface TestscreenItemProps {
  label: string
  onPress: () => void
}

const TestScreenItem: React.FC<TestscreenItemProps> = (props) => {
  const [isPressIn, setIsPressIn] = useState(false)
  const { colors } = useTheme<Theme>()
  useEffect(() => {
    console.log(isPressIn)
  }, [isPressIn])
  return (
    <Box marginTop="s">
      <Button
        mode="small"
        label={props.label}
        onPress={() => {
          props.onPress()
        }}
      />
    </Box>
  )
}

export default TestScreenItem
