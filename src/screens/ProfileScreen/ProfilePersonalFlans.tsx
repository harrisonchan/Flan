import { useTheme } from '@shopify/restyle'
import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Box, FlanCard, StatusBarPadding, Text } from '../../components'
import { ProfileStackNavigationProps } from '../../types'
import { Theme } from '../../theme'
import NavigationHeader from '../../components/NavigationHeader'
import { useAppSelector } from '../../redux'
import { FlanType } from '../../redux/features/flanSlice'
import { illustrationTypeArray } from '../../components/Illustration'

const ProfilePersonalFlans = ({ route, navigation }: ProfileStackNavigationProps) => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const createdFlans = useAppSelector((state) => state.userReducer.user.createdFlans)
  const renderPersonalFlans = (flan: FlanType) => {
    return (
      <FlanCard
        title={flan.title}
        author="Joey Lo"
        location={flan.location?.address}
        numPeople={{ attending: 10 }}
        illustration={illustrationTypeArray[flan.illustration]}
        style={{ marginBottom: spacing.l }}
        onPress={() => {
          navigation.navigate('FlanScreen', { flanId: flan.id, flanType: 'created' })
        }}
      />
    )
  }
  return (
    <>
      <StatusBarPadding />
      <Box width={themeConstants.containerWidth} alignSelf="center" flex={1}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: spacing.s, marginTop: headerHeight }}
          ListHeaderComponent={
            <Text variant="header3" marginTop="s" marginBottom="m">
              My Flans
            </Text>
          }
          data={createdFlans}
          renderItem={({ item }) => renderPersonalFlans(item)}
        />
        <NavigationHeader
          rightIconProps={{ name: 'close', size: themeConstants.headerIconSize, color: colors.darkColor }}
          rightIconOnPress={() => navigation.pop()}
          style={{ position: 'absolute' }}
          onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
        />
        <View onLayout={(e) => {}}></View>
      </Box>
    </>
  )
}

export default ProfilePersonalFlans
