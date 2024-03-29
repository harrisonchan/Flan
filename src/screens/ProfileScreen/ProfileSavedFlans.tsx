import { useTheme } from '@shopify/restyle'
import React from 'react'
import { FlatList } from 'react-native'
import { Box, FlanCard, NavigationHeader, StatusBarPadding, Text } from '@components'
import { ProfileStackNavigationProps } from '@types'
import { Theme } from '@theme'

const ProfileSavedFlans = ({ route, navigation }: ProfileStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const renderPersonalFlans = () => {
    return (
      <></>
      // <FlanCard
      //   title="Go to the zoo"
      //   author="Joey Lo"
      //   location="Harrison's House, Taipei, Taiwan"
      //   numPeople={{ attending: 10 }}
      //   style={{ marginBottom: spacing.l }}
      //   onPress={() => {
      //     navigation.navigate('FlanScreen')
      //   }}
      // />
    )
  }
  return (
    <>
      <StatusBarPadding />
      <Box width={themeConstants.containerWidth} alignSelf="center" marginTop="m" flex={1}>
        <NavigationHeader
          leftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
          leftIconOnPress={() => navigation.goBack()}
        />
        <FlatList
          ListHeaderComponent={
            <Text variant="header3" marginTop="m">
              Saved Flans
            </Text>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: spacing.s }}
          data={[{}, {}, {}]}
          renderItem={renderPersonalFlans}
        />
      </Box>
    </>
  )
}

export default ProfileSavedFlans
