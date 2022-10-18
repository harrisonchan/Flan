import { useTheme } from '@shopify/restyle'
import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View, Text as RNText } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Box, Button, ParallaxScrollView, FlanCard, StatusBarPadding, Text } from '../../components'
import { useAppSelector } from '../../redux'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/Ionicons'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import { HomeStackNavigationProps } from '../../types'
import { SharedElement } from 'react-navigation-shared-element'
import { illustrationTypeArray } from '../../components/Illustration'

dayjs.extend(localeData)

const HomeScreen = ({ route, navigation }: HomeStackNavigationProps) => {
  const [isDaytime, setIsDaytime] = useState(
    dayjs().isAfter(dayjs().set('hour', 5)) && dayjs().isBefore(dayjs().set('hour', 18)) ? true : false
  )
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const user = useAppSelector((state) => state.userReducer.user)
  const currentTime = dayjs()
  return (
    <>
      <StatusBarPadding />
      <ScrollView style={{ backgroundColor: colors.mainBackground }} showsVerticalScrollIndicator={false}>
        <Box alignSelf="center" width={themeConstants.containerWidth} marginTop="xl" marginBottom="xl">
          <TouchableOpacity style={{ marginBottom: spacing.m, alignSelf: 'flex-start' }}>
            <Icon name="notifications-outline" size={themeConstants.iconSize} color={colors.primaryColor} />
          </TouchableOpacity>
          <Box marginBottom="xxl">
            <Box flexDirection="row" alignItems="center">
              <Icon
                name={isDaytime ? 'sunny' : 'moon'}
                size={themeConstants.iconSize}
                color={isDaytime ? colors.gold : colors.aqua}
                style={{ marginRight: spacing.xs }}
              />
              <Text variant="secondary" textTransform="uppercase" color={isDaytime ? 'gold' : 'aqua'}>
                {currentTime.format('ddd DD MMM')}
              </Text>
            </Box>
            <Text variant="header3">Hi {user.username}</Text>
            <Text variant="body">Ready for today's Flans?</Text>
          </Box>
          <Text variant="body" marginBottom="s" color="primaryColor">
            Today
          </Text>
          <SharedElement id="0">
            <FlanCard
              title="Go to the zoo"
              author="Joey Lo"
              location="Harrison's House, Taipei, Taiwan"
              numPeople={{ attending: 10 }}
              style={{ marginBottom: spacing.l }}
              onPress={() => {
                navigation.navigate('FlanScreen', { flanId: '0' })
              }}
            />
          </SharedElement>
          <Text variant="body" marginBottom="s" color="primaryColor">
            Upcoming
          </Text>
          <FlanCard
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

export default HomeScreen
