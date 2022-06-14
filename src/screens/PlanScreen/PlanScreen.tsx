import React, { useEffect, useState } from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import Icon from 'react-native-vector-icons/Ionicons'
import { Box, Illustration, ParallaxScrollView, StatusBarPadding, Text } from '../../components'
import { PlanScreenNavigationProps } from '../../navigationTypes'
import { useTheme } from '@shopify/restyle'
import { theme, Theme } from '../../theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FlatList, View } from 'react-native'
import MapView from 'react-native-maps'
import dayjs from 'dayjs'

const PlanScreen = ({ route, navigation }: PlanScreenNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  return (
    <View style={{ backgroundColor: colors.mainBackground, flex: 1 }}>
      <StatusBarPadding />
      {/* <SharedElement id={route.params ? route.params.planId : ''} style={{ flex: 1 }}> */}
      <ParallaxScrollView
        // disableAnimation
        // onLayout={(e) => setPageLoaded(true)}
        skeletonLoadingTime={300}
        containerStyle={{ backgroundColor: colors.mainBackground }}
        // backgroundParallaxAnimationTranslateYForegroundPercentage={-1}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        snapToMainContentTop
        mainContentRoundedTopBorders
        mainContentStraightenBordersOnScrollToTop
        header
        headerShownOnScroll0
        headerBackgroundColor={colors.mainBackground}
        headerTitle="Go To The Park"
        headerLeftIcon={{ name: 'chevron-back', size: themeConstants.headerIconSize }}
        headerRightIcon={{ name: 'chevron-forward', size: themeConstants.headerIconSize }}
        headerLeftIconOnPress={() => navigation.goBack()}
        backgroundStyle={{ height: themeConstants.screenHeight * 0.35 }}
        background={
          <Box alignItems="center" opacity={0.5}>
            <Illustration
              illustration="illustration-hangout"
              height={themeConstants.screenHeight * 0.35}
              width={themeConstants.screenHeight * 0.35}
              fill={colors.secondaryColor}
            />
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-back" size={themeConstants.iconSize} />
              </TouchableOpacity>
              <Box>
                <Text>This is the plan screen</Text>
              </Box> */}
          </Box>
        }
        foregroundStyle={{ height: themeConstants.screenHeight * 0.35 }}
        foreground={<></>}
        mainContentStyle={{ backgroundColor: colors.lightColor }}
        mainContent={
          <Box width={themeConstants.containerWidth} alignSelf="center" paddingTop="l" paddingBottom="l">
            <Text variant="header3" marginBottom="s">
              Go To The Park
            </Text>
            <Box
              width={themeConstants.componentWidthXL}
              alignSelf="center"
              backgroundColor="mainBackground"
              padding="m"
              borderRadius={20}>
              <Text>People Attending This Event</Text>
              <Text variant="secondary" color="darkSecondaryColor" marginBottom="s">
                8 People Attending
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={['Harrison', 'Joey', 'Mark', 'Jason', 'Kathy', 'Kevin', 'Caroline', 'Janice']}
                renderItem={({ item }) => (
                  <Box flexDirection="row" marginRight="s">
                    <Box marginRight="xs">
                      <Illustration
                        illustration="illustration-wear-a-mask"
                        height={themeConstants.iconSize}
                        width={themeConstants.iconSize}
                        fill={colors.primaryColor}
                      />
                    </Box>
                    <Text variant="secondary" color="neutralText">
                      {item}
                    </Text>
                  </Box>
                )}
              />
            </Box>
            <Text marginTop="m" marginBottom="s">
              Location
            </Text>
            <MapView
              style={{
                height: themeConstants.componentHeightL,
                width: themeConstants.componentWidthXL,
                borderRadius: 20,
              }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <Text marginTop="m" marginBottom="s">
              Activities
            </Text>
            <FlatList
              listKey="ActivitiesList"
              data={[
                { title: 'Feed Pigeons', description: 'Feed the pigeons with breadcrumbs' },
                { title: 'Drink Tea', description: "Drink tea next to Williamsfords' statue" },
                { title: 'Play Games', description: 'Play games on phone at the benches' },
                { title: 'Hopscotch', description: 'Play hopscotch in the central square' },
              ]}
              renderItem={({ item }) => (
                <Box
                  width={themeConstants.componentWidthXL}
                  padding="m"
                  borderRadius={10}
                  backgroundColor="mainBackground"
                  marginBottom="s">
                  <Text variant="secondary" color="neutralText">
                    {item.title}
                  </Text>
                  <Text variant="tertiary" color="neutralText">
                    {item.description}
                  </Text>
                </Box>
              )}
            />
            <Text marginTop="m" marginBottom="s">
              Polls
            </Text>
            <FlatList
              listKey="PollsList"
              data={['Drink Coffee or Not?', 'Eat Ice Cream?', 'BYOB?']}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    width: themeConstants.componentWidthXL,
                    borderRadius: 10,
                    backgroundColor: colors.mainBackground,
                    padding: spacing.m,
                    marginBottom: spacing.s,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text variant="secondary" color="neutralText">
                    {item}
                  </Text>
                  <Icon name="chevron-forward" size={themeConstants.iconSize} />
                </TouchableOpacity>
              )}
            />
            <Text marginTop="m" marginBottom="s">
              Chat
            </Text>
          </Box>
        }
      />
      {/* </SharedElement> */}
    </View>
  )
}

export default PlanScreen
