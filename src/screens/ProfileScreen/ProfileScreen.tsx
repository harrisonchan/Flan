import { useTheme } from '@shopify/restyle'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Illustration, PlanCard, StatusBarPadding, Text } from '../../components'
import { useAppSelector } from '../../redux'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/Ionicons'

const ProfileScreen = () => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const user = useAppSelector((state) => state.userReducer.user)
  return (
    <>
      <StatusBarPadding />
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.mainBackground }}>
        <Box width={themeConstants.containerWidth} alignSelf="center" marginTop="xl" marginBottom="xl">
          <TouchableOpacity style={{ marginBottom: spacing.m }}>
            <Icon name="settings-outline" size={themeConstants.iconSize} />
          </TouchableOpacity>
          <Box flexDirection="row" alignItems="center">
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
          <Box flexDirection="row" justifyContent="space-between" marginTop="l">
            <Box
              width="30%"
              justifyContent="center"
              alignItems="center"
              backgroundColor="light"
              borderRadius={20}
              padding="s">
              <Text>5</Text>
              <Text>Awards</Text>
            </Box>
            <Box
              width="30%"
              justifyContent="center"
              alignItems="center"
              backgroundColor="light"
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
          </Box>
          <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
            <Text color="primaryColor">My Flans</Text>
            <TouchableOpacity>
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
            <Text color="primaryColor">Saved Flans</Text>
            <TouchableOpacity>
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
