import React from 'react'
import { BoxContainer, FlanCard, StatusBarPadding, Text } from '@components'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme'
import { ProfileFlanListScreenNavigationProps } from '@types'

const ProfileFlanListScreen = ({ route, navigation }: ProfileFlanListScreenNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  // console.log(route.params.)
  //   const renderPersonalFlans = () => {
  //     return (
  //       <FlanCard
  //         title="Go to the zoo"
  //         author="Joey Lo"
  //         location="Harrison's House, Taipei, Taiwan"
  //         numPeople={{ attending: 10 }}
  //         style={{ marginBottom: spacing.l }}
  //         onPress={() => {
  //           navigation.navigate('FlanScreen')
  //         }}
  //       />
  //     )
  //   }
  return <BoxContainer>{<Text>{route.params.title}</Text>}</BoxContainer>
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
