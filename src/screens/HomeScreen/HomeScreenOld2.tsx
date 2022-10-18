import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { useSafeAreaInsets, SafeAreaView, SafeAreaInsetsContext } from 'react-native-safe-area-context'
import { useAppSelector } from '../../redux'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import appStyles from '../../theme'
import { Icon, ParallaxScrollView, FlanCard, FlanList, FlanListItem, StatusBarPadding } from '../../components'
import Typography from '../../utilities/Typography'
import Animated from 'react-native-reanimated'
import { HomeStackNavigationProps } from '../../navigationTypes'
import { SharedElement } from 'react-navigation-shared-element'

dayjs.extend(localeData)

const HomeScreen = (props: HomeStackNavigationProps) => {
  // const insets = useSafeAreaInsets()
  const user = useAppSelector((state) => state.userReducer.user)
  const currentTime = dayjs()
  const titleId = 'Champaign Bar Crawl'
  return (
    <>
      <StatusBarPadding />
      <ParallaxScrollView
        // style={{ flex: 1, backgroundColor: appStyles.colors.primaryLight }}
        decelerationRate="fast"
        snapToMainContentTop
        showsVerticalScrollIndicator={false}
        mainContentRoundedTopBorders
        mainContentStraightenBordersOnScrollToTop
        backgroundParallaxAnimationTranslateYForegroundPercentage={-0.4}
        header
        headerShownOnScroll0
        background={
          <View
            style={{
              backgroundColor: appStyles.colors.primary,
              // width: '100%',
              // height: '100%',
            }}>
            <View style={{ top: appStyles.spacing.L, alignSelf: 'flex-end' }}>
              <Icon
                icon="illustration-hangout"
                height={appStyles.styleUtilities.WIDTH_S}
                width={appStyles.styleUtilities.WIDTH_S}
                fill={appStyles.colors.tertiary}
              />
            </View>
          </View>
        }
        foregroundComponentContainerStyle={{ height: appStyles.styleUtilities.SCREEN_HEIGHT_M }}
        foreground={
          // <View style={{ position: 'absolute', bottom: appStyles.spacing.XS, left: appStyles.spacing.S }}>
          <View>
            <View style={[appStyles.styles.flexRow, { alignItems: 'center' }]}>
              <Icon
                icon={
                  currentTime.isAfter(currentTime.set('hour', 5)) && currentTime.isBefore(currentTime.set('hour', 17))
                    ? 'sun'
                    : 'moon'
                }
                height={appStyles.styleUtilities.ICON_XS}
                width={appStyles.styleUtilities.ICON_XS}
                fill={appStyles.colors.primaryLight}
              />
              <Text
                style={[
                  appStyles.typography.secondary,
                  appStyles.spacingStyles.marginLeftXS,
                  { color: appStyles.colors.primaryLight, textTransform: 'uppercase' },
                ]}>
                {currentTime.format('ddd DD MMM')}
              </Text>
            </View>
            <Text style={appStyles.typography.title}>Hi {user.username}</Text>
          </View>
        }
        mainContent={
          <View
            style={[
              {
                backgroundColor: appStyles.colors.primaryLight,
                height: '100%',
                // borderTopLeftRadius: 30,
                // borderTopRightRadius: 30,
              },
              appStyles.spacingStyles.paddingS,
            ]}>
            <Text style={[appStyles.typography.body, appStyles.spacingStyles.marginBottomXXS]}>Today's Flans</Text>
            <SharedElement id={'0'}>
              <FlanCard
                title="Champaign Bar Crawl"
                author="Joey Lo"
                numPeople={{ attending: 20 }}
                categories={['Alcohol', 'Music', 'Sexy Time', 'Test1', 'Test2']}
                // randomColoredCategories
                onPress={() => props.navigation.navigate('FlanScreen', { flanId: '0', title: titleId })}
              />
            </SharedElement>
            <Text
              style={[
                appStyles.typography.body,
                appStyles.spacingStyles.marginTopXS,
                appStyles.spacingStyles.marginBottomXXS,
              ]}>
              Upcoming
            </Text>
            <FlanList
              flans={[
                { title: 'Date with Joey', date: currentTime, numPeople: { attending: 2 } },
                { title: 'Flan 2', date: currentTime.add(2, 'day'), numPeople: { attending: 2 } },
                { title: 'Flan 3', date: currentTime.add(3, 'day'), numPeople: { attending: 2 } },
                { title: 'Flan 4', date: currentTime.add(4, 'day'), numPeople: { attending: 2 } },
                { title: 'Flan 5', date: currentTime.add(5, 'day'), numPeople: { attending: 2 } },
                { title: 'Flan 6', date: currentTime.add(6, 'day'), numPeople: { attending: 2 } },
              ]}
            />
          </View>
        }
      />
    </>
  )
}

export default HomeScreen
