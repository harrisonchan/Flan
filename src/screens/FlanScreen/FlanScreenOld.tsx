import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SharedElement } from 'react-navigation-shared-element'
import { Button, Icon, ParallaxScrollView, FlanList, FlanListItem, StatusBarPadding } from '../../components'
import { HomeStackNavigationProps, FlanScreenNavigationProps } from '../../navigationTypes'
import appStyles from '../../theme'

const FlanScreen = ({ route, navigation }: HomeStackNavigationProps) => {
  const [bannerHeight, setBannerHeight] = useState(0)
  const [flanInfoBlockHeight, setFlanInfoBlockHeight] = useState(0)
  return (
    <>
      <StatusBarPadding />
      <SharedElement id={route.params ? route.params.flanId : ''} style={{ flex: 1 }}>
        <ParallaxScrollView
          style={{ flex: 1, backgroundColor: appStyles.colors.primaryLight }}
          backgroundParallaxAnimationTranslateYForegroundPercentage={-0.1}
          snapToMainContentTop
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          header
          headerShownOnScroll0
          headerLeftIcon="chevron-left"
          headerLeftIconOnPress={() => navigation.goBack()}
          background={
            <View
              onLayout={(e) => setBannerHeight(e.nativeEvent.layout.height)}
              style={[
                { backgroundColor: appStyles.colors.primary, height: appStyles.styleUtilities.SCREEN_HEIGHT_XL },
                appStyles.styles.centerContainer,
              ]}>
              <View style={{ position: 'absolute', top: 10 }}>
                <Icon
                  icon="illustration-wear-a-mask"
                  height={appStyles.styleUtilities.SCREEN_HEIGHT_M}
                  width={appStyles.styleUtilities.SCREEN_HEIGHT_M}
                  fill={appStyles.colors.primary}
                />
              </View>
            </View>
          }
          foreground={<View style={{ height: appStyles.styleUtilities.SCREEN_HEIGHT_S }}></View>}
          mainContent={
            <View
              style={[
                {
                  backgroundColor: appStyles.colors.primaryLight,
                  // height: appStyles.styleUtilities.SCREEN_HEIGHT,
                },
                appStyles.spacingStyles.paddingS,
              ]}>
              <SharedElement id={route.params ? route.params.title : ''}>
                <Text style={appStyles.typography.title}>{route.params?.title}</Text>
              </SharedElement>
              <View style={[{ alignItems: 'center' }, appStyles.styles.flexRow]}>
                <Icon
                  icon="calendar"
                  height={appStyles.styleUtilities.ICON_XS}
                  width={appStyles.styleUtilities.ICON_XS}
                  fill={appStyles.colors.secondaryDark}
                />
                <Text
                  style={[
                    { color: appStyles.colors.secondaryDark },
                    // appStyles.spacingStyles.marginLeftXS,
                    appStyles.typography.body,
                    appStyles.spacingStyles.marginLeftXS,
                  ]}>
                  12th May
                </Text>
              </View>
              <View
                style={[
                  {
                    // width: '50%',
                    // height: appStyles.styleUtilities.SCREEN_HEIGHT_M,
                    borderRadius: 10,
                    backgroundColor: appStyles.colors.tertiary,
                  },
                  appStyles.spacingStyles.marginTopXXS,
                  appStyles.spacingStyles.paddingXS,
                ]}>
                <View style={[{ alignItems: 'center' }, appStyles.styles.flexRow]}>
                  <Text
                    style={[
                      { color: appStyles.colors.primaryDark },
                      // appStyles.spacingStyles.marginLeftXS,
                      appStyles.typography.body,
                    ]}>
                    Attendance
                  </Text>
                </View>
                <Text
                  style={[
                    { color: appStyles.colors.secondaryDark },
                    appStyles.typography.secondary,
                    appStyles.spacingStyles.marginBottomXXS,
                  ]}>
                  12 People Attending
                </Text>
                <FlatList
                  style={{ backgroundColor: 'red' }}
                  nestedScrollEnabled
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={['Harrison', 'Joey', 'Mark', 'Kevin']}
                  keyExtractor={(item, index) => item + index.toString()}
                  renderItem={({ item }) => (
                    <View style={[{ alignItems: 'center' }, appStyles.styles.flexRow]}>
                      <View
                        style={[
                          {
                            borderRadius: 100,
                            // backgroundColor: 'orange',
                            height: appStyles.styleUtilities.ICON_M,
                            width: appStyles.styleUtilities.ICON_M,
                          },
                          appStyles.spacingStyles.marginTopXXS,
                          // appStyles.spacingStyles.marginBottomXXS,
                        ]}>
                        <Icon
                          icon="illustration-wear-a-mask"
                          height={appStyles.styleUtilities.ICON_M}
                          width={appStyles.styleUtilities.ICON_M}
                          fill={appStyles.colors.primary}
                        />
                      </View>
                      <Text
                        style={[
                          { color: appStyles.colors.primaryDark },
                          appStyles.spacingStyles.marginLeftXS,
                          appStyles.typography.secondary,
                        ]}>
                        {item}
                      </Text>
                    </View>
                  )}
                />
              </View>
              <View style={[appStyles.spacingStyles.marginTopXS]}>
                <Text style={[appStyles.spacingStyles.marginBottomXXS, appStyles.typography.body]}>Description</Text>
                <Text
                  style={[
                    { color: appStyles.colors.secondary },
                    appStyles.spacingStyles.marginBottomXXS,
                    appStyles.typography.tertiary,
                  ]}>
                  No Description
                </Text>
              </View>
              <View style={[appStyles.spacingStyles.marginTopXS]}>
                <Text style={[appStyles.spacingStyles.marginBottomXXS, appStyles.typography.body]}>Activities</Text>
                <FlanList
                  // style={{ height: '100%' }}
                  flans={[
                    { title: 'Date with Joey', date: dayjs(), numPeople: { attending: 2 } },
                    // { title: 'Flan 2', date: dayjs().add(2, 'day'), numPeople: { attending: 2 } },
                    // { title: 'Flan 3', date: dayjs().add(3, 'day'), numPeople: { attending: 2 } },
                    // { title: 'Flan 4', date: dayjs().add(4, 'day'), numPeople: { attending: 2 } },
                    // { title: 'Flan 5', date: dayjs().add(5, 'day'), numPeople: { attending: 2 } },
                    // { title: 'Flan 6', date: dayjs().add(6, 'day'), numPeople: { attending: 2 } },
                  ]}
                />
              </View>
              <View style={[appStyles.spacingStyles.marginTopXS]}>
                <Text style={[appStyles.spacingStyles.marginBottomXXS, appStyles.typography.body]}>Location</Text>
                <Text
                  style={[
                    { color: appStyles.colors.secondary },
                    appStyles.spacingStyles.marginBottomXXS,
                    appStyles.typography.tertiary,
                  ]}>
                  No Location Listed
                </Text>
              </View>
              <View style={[appStyles.spacingStyles.marginTopXS]}>
                <Text style={[appStyles.spacingStyles.marginBottomXXS, appStyles.typography.body]}>Polls</Text>
                <Text
                  style={[
                    { color: appStyles.colors.secondary },
                    appStyles.spacingStyles.marginBottomXXS,
                    appStyles.typography.tertiary,
                  ]}>
                  No Polls Yet
                </Text>
              </View>
              {/* <Text style={[appStyles.spacingStyles.marginBottomXXS, appStyles.typography.body]}>Chat</Text> */}
            </View>
          }
        />
      </SharedElement>
    </>
  )
}

// FlanScreen.sharedElements = () => {
//   return [
//     {
//       id: 'barCrawl',
//       animation: 'move',
//       resize: 'clip',
//     },
//   ]
// }

export default FlanScreen
