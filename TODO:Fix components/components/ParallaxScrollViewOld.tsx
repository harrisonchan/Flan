import React, { ComponentType, JSXElementConstructor, ReactElement, useState } from 'react'
import {
  RegisteredStyle,
  View,
  ViewStyle,
  // FlatList,
  SectionList,
  Text,
  TouchableOpacity,
  ColorValue,
  OpaqueColorValue,
} from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  interpolateColors,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'
import // FlatList
'react-native-gesture-handler'
import Icon, { IconProps, iconType } from './Illustration'

interface ParallaxScrollViewProps {
  backgroundComponent: ComponentType<any> | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined
  backgroundComponentContainerStyle?:
    | ViewStyle
    | RegisteredStyle<ViewStyle>
    | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  foregroundComponent: ComponentType<any> | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined
  foregroundComponentContainerStyle?:
    | ViewStyle
    | RegisteredStyle<ViewStyle>
    | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  mainContentComponent: ComponentType<any> | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined
  mainContentComponentContainerStyle?:
    | ViewStyle
    | RegisteredStyle<ViewStyle>
    | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  style?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  backgroundParallaxAnimationTranslateYForegroundPercentage?: number
  decelerationRate?: 'normal' | 'fast'
  snapToMainContentTop?: boolean
  showsVerticalScrollIndicator?: boolean
  mainContentRoundedTopBorders?: boolean
  mainContentStraightenBordersOnScrollToTop?: boolean
  header?: boolean
  headerShownOnScroll0?: boolean
  headerBackgroundColor?: string | number
  headerTitle?: string
  headerLeftIcon?: iconType
  headerRightIcon?: iconType
  headerLeftIconOnPress?: () => void
  headerRightIconOnPress?: () => void
}

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = (props) => {
  const [foregroundHeight, setForegroundHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const scrollYSharedValue = useSharedValue(0)
  const backgroundTranslateYSharedValue = useSharedValue(0)
  const mainContentBorderRadiusSharedValue = useSharedValue(foregroundHeight)
  // const foregroundSharedValue = useSharedValue(0)

  const backgroundTranslateYAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          backgroundTranslateYSharedValue.value,
          [-1, 0, 1],
          [
            0,
            0,
            props.backgroundParallaxAnimationTranslateYForegroundPercentage
              ? props.backgroundParallaxAnimationTranslateYForegroundPercentage
              : -0.5,
          ]
          // { extrapolateLeft: Extrapolate.IDENTITY }
        ),
      },
    ],
  }))
  const backgroundAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollYSharedValue.value,
      [0, foregroundHeight - headerHeight * 1.1, foregroundHeight - headerHeight],
      [1, 1, props.header ? 0 : 1]
    ),
  }))
  const foregroundAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollYSharedValue.value,
      [0, foregroundHeight - headerHeight * 1.1, foregroundHeight - headerHeight],
      [1, 1, props.header ? 0 : 1]
    ),
  }))
  const mainContentBorderRadiusAnimatedStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      mainContentBorderRadiusSharedValue.value,
      [props.header ? -(foregroundHeight - headerHeight) : -foregroundHeight, 0],
      [0, props.mainContentRoundedTopBorders ? 30 : 0],
      Extrapolate.CLAMP
    )
    return { borderRadius }
  })
  // const headerBackgroundColorAnimatedStyle = useAnimatedStyle(() => ({
  //   backgroundColor: 'red',
  // }))
  const headerOpacityAnimatedStyle = useAnimatedStyle(() => ({
    // backgroundColor: interpolateColor(
    //   scrollYSharedValue.value,
    //   [foregroundHeight - headerHeight * 2.1, foregroundHeight - headerHeight],
    //   ['transparent', props.headerBackgroundColor ? props.headerBackgroundColor : appStyles.colors.primary]
    // ),
    opacity: interpolate(
      scrollYSharedValue.value,
      [foregroundHeight - headerHeight * 1.25, foregroundHeight - headerHeight * 1.05],
      [props.headerShownOnScroll0 ? 1 : 0, 1]
    ),
  }))
  const headerDelayedOpacityAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollYSharedValue.value,
      [-1, foregroundHeight - headerHeight * 1.25, foregroundHeight - headerHeight * 1.05],
      [0, 0, 1]
    ),
  }))
  // const foregroundAnimatedStyle = useAnimatedStyle(() => ({
  //   opacity: interpolate(
  //     foregroundSharedValue.value,
  //     [foregroundHeight - headerHeight * 2, foregroundHeight - headerHeight],
  //     [1, 0]
  //   ),
  // }))
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      const scrollY = e.contentOffset.y
      scrollYSharedValue.value = scrollY
      backgroundTranslateYSharedValue.value = scrollY
      if (props.mainContentStraightenBordersOnScrollToTop) {
        mainContentBorderRadiusSharedValue.value = -scrollY
      }
    },
  })
  const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)
  const sections = [{ data: [{}] }]
  return (
    <View style={[props.style, { overflow: 'hidden' }]}>
      <Animated.View
        style={[
          { position: 'absolute', width: '100%' },
          backgroundTranslateYAnimatedStyle,
          backgroundAnimatedStyle,
          props.backgroundComponentContainerStyle,
        ]}>
        {props.backgroundComponent}
      </Animated.View>
      <AnimatedSectionList
        // style={{ position: 'absolute', width: '100%', height: '100%' }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        nestedScrollEnabled
        decelerationRate={props.decelerationRate}
        snapToInterval={
          props.snapToMainContentTop ? (props.header ? foregroundHeight - headerHeight : foregroundHeight) : undefined
        }
        snapToAlignment={props.snapToMainContentTop ? 'start' : undefined}
        showsVerticalScrollIndicator={props.showsVerticalScrollIndicator}
        ListHeaderComponent={
          <View
            onLayout={(e) => setForegroundHeight(e.nativeEvent.layout.height)}
            style={[foregroundAnimatedStyle, props.foregroundComponentContainerStyle]}>
            {props.foregroundComponent}
          </View>
        }
        // data={[{}]}
        sections={sections}
        renderItem={() => (
          <Animated.View
            style={[
              { overflow: 'hidden' },
              mainContentBorderRadiusAnimatedStyle,
              props.mainContentComponentContainerStyle,
            ]}>
            {props.mainContentComponent}
          </Animated.View>
        )}
      />
      {props.header && (
        <Animated.View
          onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
          style={[
            appStyles.spacingStyles.paddingLeftXS,
            appStyles.spacingStyles.paddingRightXS,
            appStyles.styles.flexRow,
            {
              position: 'absolute',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            },
            headerOpacityAnimatedStyle,
            // headerBackgroundColorAnimatedStyle,
          ]}>
          <Animated.View
            style={[
              {
                position: 'absolute',
                width: '200%',
                height: '100%',
                backgroundColor: props.headerBackgroundColor ? props.headerBackgroundColor : appStyles.colors.primary,
              },
              headerDelayedOpacityAnimatedStyle,
            ]}
          />
          {props.headerLeftIcon && (
            <TouchableOpacity onPress={() => props.headerLeftIconOnPress && props.headerLeftIconOnPress()}>
              <Icon
                icon={props.headerLeftIcon}
                height={appStyles.styleUtilities.ICON_M}
                width={appStyles.styleUtilities.ICON_M}
              />
            </TouchableOpacity>
          )}
          {props.headerTitle && (
            <Animated.Text style={headerDelayedOpacityAnimatedStyle}>{props.headerTitle}</Animated.Text>
          )}
          {props.headerRightIcon && (
            <TouchableOpacity onPress={() => props.headerRightIconOnPress && props.headerRightIconOnPress()}>
              <Icon
                icon={props.headerRightIcon}
                height={appStyles.styleUtilities.ICON_M}
                width={appStyles.styleUtilities.ICON_M}
              />
            </TouchableOpacity>
          )}
        </Animated.View>
      )}
    </View>
  )
}

export default ParallaxScrollView
