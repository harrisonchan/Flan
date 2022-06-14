import { useTheme } from '@shopify/restyle'
import React from 'react'
import { FlatList } from 'react-native'
import { Box, PlanCard, StatusBarPadding, Text } from '../../components'
import { ProfileStackNavigationProps } from '../../types'
import { Theme } from '../../theme'
import NavigationHeader from '../../components/NavigationHeader'

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
      <Box width={themeConstants.containerWidth} alignSelf="center" marginTop="xl" flex={1}>
        <NavigationHeader
          leftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
          leftIconOnPress={() => navigation.goBack()}
        />
        <Text variant="header3" marginTop="m">
          My Flans
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: spacing.s }}
          data={[{}, {}, {}]}
          renderItem={renderPersonalFlans}
        />
      </Box>
    </>
  )
}

export default ProfilePersonalFlans
