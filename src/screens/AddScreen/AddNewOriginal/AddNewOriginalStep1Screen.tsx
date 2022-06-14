import React, { useState } from 'react'
import { Box, Button, StatusBarPadding, Text, TextInput } from '../../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../../theme'
import { AddStackNavigationProps } from '../../../navigationTypes'

const AddNewOriginalScreen = ({ route, navigation }: AddStackNavigationProps) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState<{} | null>({})
  const [activities, setActivities] = useState<[] | null>([])
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  return (
    <>
      <StatusBarPadding />
      <Box flex={1} backgroundColor="mainBackground">
        <Box width={themeConstants.containerWidth} alignSelf="center" flex={1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={themeConstants.headerIconSize} />
          </TouchableOpacity>
          <ScrollView>
            <Text>Create Your Own Flan</Text>
            <Text variant="secondary" color="primaryColor">
              Name Your Flan
            </Text>
            <TextInput placeholder="Name Your Flan!" label="Flan Name" />
            <Text variant="secondary" color="primaryColor">
              Describe Your Flan
            </Text>
            <TextInput placeholder="Describe Your Flan!" label="Flan Description" />
            <Text variant="secondary" color="primaryColor">
              Add A Location
            </Text>
            <Text variant="secondary">Location skipped for now...</Text>
            <Button label="Skip" mode="small" onPress={() => setLocation(null)} />
            <Text variant="secondary" color="primaryColor">
              Add Activities
            </Text>
            <Text variant="secondary">Adding activities skipped for now...</Text>
            <Button label="Skip" mode="small" onPress={() => setActivities(null)} />
            <Button label="Pick An Illustration" onPress={() => navigation.navigate('AddNewOriginalStep2Screen')} />
          </ScrollView>
        </Box>
      </Box>
    </>
  )
}

export default AddNewOriginalScreen
