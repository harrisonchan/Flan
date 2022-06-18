import { useTheme } from '@shopify/restyle'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Illustration, PlanCard, StatusBarPadding, Text } from '../../components'
import { useAppSelector } from '../../redux'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { ProfileStackNavigationProps } from '../../types'
import NavigationHeader from '../../components/NavigationHeader'
import { illustrationTypeArray } from '../../components/Illustration'

const ProfileScreen = ({ route, navigation }: ProfileStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const user = useAppSelector((state) => state.userReducer.user)
  const { createdFlans, savedFlans, attendedFlans } = user
  return (
    <>
      <StatusBarPadding />
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.mainBackground }}>
        <Box width={themeConstants.containerWidth} alignSelf="center" marginTop="xl" marginBottom="xl">
          <NavigationHeader
            leftIconProps={{ name: 'settings-outline', size: themeConstants.iconSize, color: colors.primaryColor }}
          />
          <Box flexDirection="row" alignItems="center" marginTop="m">
            <Box borderRadius={100} backgroundColor="primaryColor" overflow="hidden" marginRight="m">
              <Illustration
                illustration="illustration-wear-a-mask"
                height={themeConstants.smallIllustrationSize}
                width={themeConstants.smallIllustrationSize}
              />
            </Box>
            <Text variant="header3">
              {user.userFirstName} {user.userLastName}
            </Text>
          </Box>
          {/* <Box flexDirection="row" justifyContent="space-between" marginTop="l">
            <Box
              width="30%"
              justifyContent="center"
              alignItems="center"
              backgroundColor="lightColor"
              borderRadius={20}
              padding="s">
              <Text>5</Text>
              <Text>Awards</Text>
            </Box>
            <Box
              width="30%"
              justifyContent="center"
              alignItems="center"
              backgroundColor="lightColor"
              borderRadius={20}
              padding="s"
              marginLeft="m"
              marginRight="m">
              <Text>4</Text>
              <Text>Flans</Text>
            </Box>
            <Box width="30%">
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  // width: '100%',
                  // height: '100%',
                  borderRadius: 20,
                  padding: spacing.s,
                  backgroundColor: colors.secondaryColor,
                }}>
                <Text>30</Text>
                <Text>Friends</Text>
              </TouchableOpacity>
            </Box>
          </Box> */}
          <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
            <Text color="primaryColor">My Flans</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfilePersonalFlans')}>
              <Text variant="secondary">See All</Text>
            </TouchableOpacity>
          </Box>
          {createdFlans.length > 0 ? (
            <PlanCard
              title={createdFlans[0].title}
              author="Joey Lo"
              location={createdFlans[0].location?.address}
              numPeople={{ attending: 10 }}
              onPress={() => navigation.navigate('PlanScreen', { planId: createdFlans[0].id, planType: 'created' })}
              illustration={illustrationTypeArray[createdFlans[0].illustration]}
            />
          ) : (
            <Text variant="secondary">Looks Like There Are No Flans Here Yet :(</Text>
          )}
          <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
            <Text color="primaryColor">Saved Flans</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileSavedFlans')}>
              <Text variant="secondary">See All</Text>
            </TouchableOpacity>
          </Box>
          <PlanCard
            title="Go to the zoo"
            author="Joey Lo"
            location="Harrison's House, Taipei, Taiwan"
            numPeople={{ attending: 10 }}
          />
          <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
            <Text color="primaryColor">Previous Flans</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileSavedFlans')}>
              <Text variant="secondary">See All</Text>
            </TouchableOpacity>
          </Box>
          <PlanCard
            title="Go to the zoo"
            author="Joey Lo"
            location="Harrison's House, Taipei, Taiwan"
            numPeople={{ attending: 10 }}
          />
        </Box>
      </ScrollView>
    </>
  )
}

export default ProfileScreen
