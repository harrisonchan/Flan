import { useTheme } from '@shopify/restyle'
import React from 'react'
import { FlatList } from 'react-native'
import { Box, PlanCard, StatusBarPadding, Text } from '../../components'
import { ProfileStackNavigationProps } from '../../navigationTypes'
import { Theme } from '../../theme'

const ProfilePersonalFlans = ({ route, navigation }: ProfileStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const renderPersonalFlans = () => {
    return (
      <PlanCard
        title="Go to the zoo"
        author="Joey Lo"
        location="Harrison's House, Taipei, Taiwan"
        numPeople={{ attending: 10 }}
        style={{ marginBottom: spacing.l }}
        onPress={() => {
          navigation.navigate('PlanScreen')
        }}
      />
    )
  }
  return (
    <>
      <StatusBarPadding />
      <Box width={themeConstants.containerWidth} alignSelf="center">
        <Text variant="header3" marginTop="xl">
          My Flans
        </Text>
        <FlatList data={[{}]} renderItem={renderPersonalFlans} />
      </Box>
    </>
  )
}

export default ProfilePersonalFlans
