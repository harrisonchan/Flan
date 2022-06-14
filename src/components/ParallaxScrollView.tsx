import { useTheme } from '@shopify/restyle'
import { transform } from 'lodash'
import React, {
  ComponentType,
  JSXElementConstructor,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react'
import { ColorValue, FlatList, RegisteredStyle, TouchableOpacity, View, ViewStyle, SectionList } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Theme } from '../theme'
import Box from './Box'
import Text from './Text'
import StatusBarPadding from './StatusBarPadding'
import Icon from 'react-native-vector-icons/Ionicons'
import dayjs from 'dayjs'
import SkeletonScreen from './SkeletonScreen'
import { IconProps } from 'react-native-vector-icons/Icon'

interface ParallaxScrollViewProps {
  containerStyle?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  background: ComponentType<any> | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined
  foreground: ComponentType<any> | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined
  mainContent: ComponentType<any> | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined
  backgroundStyle?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  foregroundStyle?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  mainContentStyle?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  backgroundParallaxAnimationTranslateYForegroundPercentage?: number
  showsVerticalScrollIndicator?: boolean
  bounces?: boolean
  decelerationRate?: 'normal' | 'fast'
  snapToMainContentTop?: boolean
  mainContentRoundedTopBorders?: boolean
  mainContentStraightenBordersOnScrollToTop?: boolean
  header?: boolean
  headerBackgroundColor?: ColorValue
  headerShownOnScroll0?: boolean
  headerLeftIconProps?: IconProps
  headerRightIconProps?: IconProps
  headerLeftIconOnPress?: () => void
  headerRightIconOnPress?: () => void
  headerTitle?: string
  disableAnimation?: boolean
  onLayout?: (event: SyntheticEvent) => void
  skeletonLoadingTime?: number
}

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = (props) => {
  const [foregroundHeight, setForegroundHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const AnimatedText = Animated.createAnimatedComponent(Text)
  const scrollYSharedValue = useSharedValue(0)
  const backgroundTranslateYAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollYSharedValue.value,
          [-1, 0, 1],
          [
            0,
            0,
            props.backgroundParallaxAnimationTranslateYForegroundPercentage
              ? props.backgroundParallaxAnimationTranslateYForegroundPercentage
              : -0.5,
          ]
        ),
      },
    ],
  }))
  const backgroundOpacityAnimatedStyle = useAnimatedStyle(() => ({
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
      scrollYSharedValue.value,
      [0, props.header ? foregroundHeight - headerHeight : foregroundHeight],
      [30, props.mainContentStraightenBordersOnScrollToTop ? 0 : 30],
      Extrapolate.CLAMP
    )
    return {
      // borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius,
      borderRadius,
      overflow: 'hidden',
    }
  })
  const headerDelayedOpacityAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollYSharedValue.value,
      [foregroundHeight - headerHeight * 1.25, foregroundHeight - headerHeight * 1.05],
      [0, 1]
    ),
  }))
  const renderBackground = () => {
    return (
      <Animated.View
        style={[
          { position: 'absolute', width: '100%' },
          !props.disableAnimation && backgroundTranslateYAnimatedStyle,
          !props.disableAnimation && backgroundOpacityAnimatedStyle,
          props.backgroundStyle,
        ]}>
        {props.background}
      </Animated.View>
    )
  }
  const renderForeground = () => {
    return (
      <View
        style={[!props.disableAnimation && foregroundAnimatedStyle, props.foregroundStyle]}
        onLayout={(e) => setForegroundHeight(e.nativeEvent.layout.height)}>
        {props.foreground}
      </View>
    )
  }
  const renderMainContent = () => {
    return (
      <Animated.View
        onLayout={(e) => props.onLayout && props.onLayout(e)}
        style={[
          { minHeight: themeConstants.screenHeight - foregroundHeight - headerHeight },
          props.mainContentRoundedTopBorders && !props.disableAnimation && mainContentBorderRadiusAnimatedStyle,
          props.mainContentStyle,
        ]}>
        {props.mainContent}
      </Animated.View>
    )
  }
  const renderHeader = () => {
    return (
      <Animated.View
        onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
        style={[
          { position: 'absolute', width: '100%' },
          !props.headerShownOnScroll0 && !props.disableAnimation && headerDelayedOpacityAnimatedStyle,
        ]}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              width: '200%',
              height: '100%',
              backgroundColor: props.headerBackgroundColor ? props.headerBackgroundColor : colors.primaryColor,
            },
            !props.disableAnimation && headerDelayedOpacityAnimatedStyle,
          ]}
        />
        <Box
          // justifyContent="space-between"
          alignItems="center"
          width="100%"
          flexDirection="row"
          paddingLeft="m"
          paddingRight="m"
          paddingTop="s"
          paddingBottom="s">
          <View style={{ width: '20%', alignItems: 'flex-start' }}>
            {props.headerLeftIconProps && (
              <TouchableOpacity onPress={() => props.headerLeftIconOnPress && props.headerLeftIconOnPress()}>
                <Icon {...props.headerLeftIconProps} />
              </TouchableOpacity>
            )}
          </View>
          <View style={{ width: '60%', alignItems: 'center' }}>
            {props.headerTitle && (
              <AnimatedText style={[!props.disableAnimation && headerDelayedOpacityAnimatedStyle]}>
                {props.headerTitle}
              </AnimatedText>
            )}
          </View>
          <View style={{ width: '20%', alignItems: 'flex-end' }}>
            {props.headerRightIconProps && (
              <TouchableOpacity onPress={() => props.headerRightIconOnPress && props.headerRightIconOnPress()}>
                <Icon {...props.headerRightIconProps} />
              </TouchableOpacity>
            )}
          </View>
        </Box>
      </Animated.View>
    )
  }
  useEffect(() => {
    if (props.skeletonLoadingTime) {
      setTimeout(() => {
        setIsLoading(false)
      }, props.skeletonLoadingTime)
    }
  }, [])
  if (isLoading && props.skeletonLoadingTime) {
    return (
      <SkeletonScreen type="ParallaxScrollView" backgroundColor={colors.lightColor} color={colors.mainBackground} />
    )
  }
  return (
    <Box overflow="hidden" style={props.containerStyle}>
      {renderBackground()}
      <SectionList
        nestedScrollEnabled
        showsVerticalScrollIndicator={props.showsVerticalScrollIndicator}
        onScroll={(e) => {
          scrollYSharedValue.value = e.nativeEvent.contentOffset.y
        }}
        scrollEventThrottle={16}
        bounces={props.bounces}
        decelerationRate={props.decelerationRate}
        snapToInterval={
          props.snapToMainContentTop
            ? props.header
              ? //+1 to get rid of any gaps in between caused by rounding inaccuracies
                foregroundHeight - headerHeight + 1
              : foregroundHeight
            : undefined
        }
        snapToAlignment={props.snapToMainContentTop ? 'start' : undefined}
        // data={[{}]}
        sections={[{ data: [{}] }]}
        // listKey={(item, index) => item + index.toString()}
        // keyExtractor={(item, index) => item + index.toString(}}
        listKey={Date().toString()}
        keyExtractor={(item, index) => item.toString() + index.toString()}
        ListHeaderComponent={renderForeground()}
        renderItem={renderMainContent}
      />
      {props.header && renderHeader()}
    </Box>
  )
}

export default ParallaxScrollView
