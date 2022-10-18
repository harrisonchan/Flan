import React, { useEffect, useState } from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import Icon from 'react-native-vector-icons/Ionicons'
import { Box, Button, Illustration, ParallaxScrollView, StatusBarPadding, Text } from '../../components'
import { useTheme } from '@shopify/restyle'
import { theme, Theme } from '../../theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FlatList, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import dayjs from 'dayjs'
import { FlanScreenNavigationProps } from '../../types'
import { useAppSelector } from '../../redux'
import { useDispatch } from 'react-redux'
import { appActions } from '../../redux/features'
import { illustrationTypeArray } from '../../components/Illustration'
import { FlanType } from '../../redux/features/flanSlice'

const FlanScreen = ({ route, navigation }: FlanScreenNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const [flan, setFlan] = useState<FlanType | undefined>(undefined)
  const user = useAppSelector((state) => state.userReducer.user)
  const dispatch = useDispatch()
  useEffect(() => {
    if (route.params) {
      let copy = []
      if (route.params.flanType == 'created') {
        copy = user.createdFlans
      } else if (route.params.flanType == 'saved') {
        copy = user.savedFlans
      } else {
        copy = user.attendedFlans
      }
      copy.forEach((flan) => {
        if (route.params?.flanId == flan.id) {
          setFlan(flan)
        }
      })
    }
  }, [])
  return (
    <View style={{ backgroundColor: colors.mainBackground, flex: 1 }}>
      <StatusBarPadding />
      {/* <SharedElement id={route.params ? route.params.flanId : ''} style={{ flex: 1 }}> */}
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
        headerLeftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
        headerLeftIconOnPress={() => navigation.goBack()}
        headerRightIconProps={{ name: 'pencil', size: themeConstants.iconSize, color: colors.darkColor }}
        backgroundStyle={{ height: themeConstants.screenHeight * 0.35 }}
        background={
          <Box alignItems="center" opacity={0.5}>
            {flan?.illustration && (
              <Illustration
                illustration={illustrationTypeArray[flan?.illustration]}
                height={themeConstants.screenHeight * 0.35}
                width={themeConstants.screenHeight * 0.35}
                fill={colors.secondaryColor}
              />
            )}
          </Box>
        }
        foregroundStyle={{ height: themeConstants.screenHeight * 0.35 }}
        foreground={<></>}
        mainContentStyle={{ backgroundColor: colors.lightColor }}
        mainContent={
          <Box width={themeConstants.containerWidth} alignSelf="center" paddingTop="l" paddingBottom="l">
            <Text variant="header3" marginBottom="s">
              {flan?.title}
            </Text>
            <Text variant="secondary" marginBottom="m">
              {flan?.description}
            </Text>
            <Box
              width={themeConstants.containerWidth}
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
            <Text variant="secondary" marginBottom="s">
              {flan?.location?.address}
            </Text>
            {flan?.location?.coordinate && (
              <MapView
                provider={PROVIDER_GOOGLE}
                scrollEnabled={false}
                liteMode
                style={{
                  height: themeConstants.componentHeightL,
                  width: themeConstants.componentWidthXL,
                  borderRadius: 20,
                }}
                camera={{ center: flan?.location?.coordinate, altitude: 1000, heading: 0, pitch: 0, zoom: 18 }}>
                <Marker coordinate={flan.location.coordinate} />
              </MapView>
            )}
            <Text marginTop="m" marginBottom="s">
              Activities
            </Text>
            <FlatList
              listKey="ActivitiesList"
              data={
                // [
                //   { title: 'Feed Pigeons', description: 'Feed the pigeons with breadcrumbs' },
                //   { title: 'Drink Tea', description: "Drink tea next to Williamsfords' statue" },
                //   { title: 'Play Games', description: 'Play games on phone at the benches' },
                //   { title: 'Hopscotch', description: 'Play hopscotch in the central square' },
                // ]
                flan?.activities
              }
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
              data={
                // ['Drink Coffee or Not?', 'Eat Ice Cream?', 'BYOB?']
                flan?.polls
              }
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
            <Text marginTop="m" marginBottom="m">
              Chat
            </Text>
            <Button
              label="Delete Flan"
              style={{ marginBottom: spacing.m }}
              onPress={() =>
                dispatch(
                  appActions.utilityActions.showAlert({
                    title: 'Delete Confirmation',
                    message: 'Are you sure you want to delete this Flan?',
                    positiveActionProps: {
                      message: 'Yes',
                      action: () => {
                        dispatch(appActions.userActions.deleteFlan(route.params?.flanId))
                        dispatch(appActions.utilityActions.hideAlert())
                        navigation.pop()
                      },
                    },
                    negativeActionProps: {
                      message: 'No',
                      action: () => {
                        dispatch(appActions.utilityActions.hideAlert())
                      },
                    },
                  })
                )
              }
            />
          </Box>
        }
      />
      {/* </SharedElement> */}
    </View>
  )
}

export default FlanScreen
