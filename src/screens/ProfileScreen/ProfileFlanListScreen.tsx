import React from 'react'
import { BoxContainer, FlanCard, StatusBarPadding, Text } from '@components'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme'
import { FlanType, ProfileFlanListScreenNavigationProps } from '@types'
import { FlatList } from 'react-native'

const ProfileFlanListScreen = ({ route, navigation }: ProfileFlanListScreenNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  // console.log(route.params.)
  //   const renderPersonalFlans = () => {
  //     return (

  //     )
  //   }
  return (
    <BoxContainer
      navigationHeaderProps={{
        title: route.params.title,
      }}>
      <FlatList
        ListHeaderComponent={<Text>{route.params.title}</Text>}
        data={route.params.flanData ?? []}
        renderItem={({ item }) => (
          <FlanCard
            title={item.title}
            author={item.author}
            address={item.location.address}
            numPeople={item.peopleAttending.length}
            style={{ marginBottom: spacing.l }}
            onPress={() => {
              navigation.navigate('FlanStack', { screen: 'FlanScreen', params: item })
            }}
          />
        )}
      />
    </BoxContainer>
  )
}

export default ProfileFlanListScreen

/* <Box width={themeConstants.containerWidth} alignSelf="center" marginTop="m" flex={1}>
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
        </Box> */
