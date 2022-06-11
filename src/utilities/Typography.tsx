import React from 'react'
import { View } from 'react-native'
import { Text } from '../components'

const Typography = () => {
  return (
    <View>
      <Text variant="header1">This is Header1</Text>
      <Text variant="header2">This is Header2</Text>
      <Text variant="header3">This is Header3</Text>
      <Text variant="body">This is Body</Text>
      <Text variant="secondary">This is Secondary</Text>
      <Text variant="tertiary">This is Tertiary</Text>
      <Text variant="form">This is Form</Text>
      <Text variant="action">This is Action</Text>
    </View>
  )
}

export default Typography
