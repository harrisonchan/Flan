import React, { useEffect, useState } from 'react'
import { Box, Button, StatusBarPadding, Text, TextInput } from '../../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../../theme'
import { AddStackNavigationProps } from '../../../types'
import NavigationHeader from '../../../components/NavigationHeader'
import { ActivityType, LocationType } from '../../../redux/features/userSlice'

const AddNewOriginalInputFieldsScreen = ({ route, navigation }: AddStackNavigationProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState<LocationType | undefined>(undefined)
  const [activities, setActivities] = useState<ActivityType[] | undefined>(undefined)

  useEffect(() => {
    if (route.params) {
      if (route.params.location) {
        setLocation(route.params.location)
      }
    }
  }, [route])

  const { colors, spacing, themeConstants } = useTheme<Theme>()
  return (
    <>
      <StatusBarPadding />
      <Box flex={1} backgroundColor="mainBackground">
        <Box width={themeConstants.containerWidth} alignSelf="center" flex={1}>
          <NavigationHeader
            leftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
            leftIconOnPress={() => navigation.goBack()}
          />
          <ScrollView>
            <Text>Create Your Own Flan</Text>
            <Text variant="secondary" color="primaryColor">
              Name Your Flan
            </Text>
            <TextInput placeholder="Name Your Flan!" label="Flan Name" onChangeText={(input) => setTitle(input)} />
            <Text variant="secondary" color="primaryColor">
              Describe Your Flan
            </Text>
            <TextInput
              placeholder="Describe Your Flan!"
              label="Flan Description"
              onChangeText={(input) => setDescription(input)}
            />
            <Text variant="secondary" color="primaryColor">
              Add A Location
            </Text>
            <Text variant="secondary">Location skipped for now...</Text>
            <Text variant="secondary">{route.params?.location?.address}</Text>
            <Box flexDirection="row">
              <Button
                label="Add Location"
                mode="small"
                onPress={() => navigation.navigate('AddNewSelectLocationScreen')}
                style={{ backgroundColor: colors.lightGreen }}
              />
              <Button label="Skip" mode="small" onPress={() => setLocation(undefined)} />
            </Box>
            <Text variant="secondary" color="primaryColor">
              Add Activities
            </Text>
            <Text variant="secondary">Adding activities skipped for now...</Text>
            <Button label="Skip" mode="small" onPress={() => setActivities(undefined)} />
            <Button
              label="Pick An Illustration"
              onPress={() => {
                navigation.navigate('AddNewOriginalPickIllustrationScreen', {
                  title,
                  description,
                  location,
                  activities,
                })
              }}
            />
          </ScrollView>
        </Box>
      </Box>
    </>
  )
}

export default AddNewOriginalInputFieldsScreen
