import { useTheme } from '@shopify/restyle'
import { transform } from 'lodash'
import React, { ComponentType, JSXElementConstructor, ReactElement, useState } from 'react'
import { ColorValue, FlatList, RegisteredStyle, TouchableOpacity, View, ViewStyle, SectionList } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Theme } from '../theme'
import Box from './Box'
import Text from './Text'
import StatusBarPadding from './StatusBarPadding'
import Icon from 'react-native-vector-icons/Ionicons'

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
  headerLeftIcon?: { name: string; size: number }
  headerRightIcon?: { name: string; size: number }
  headerLeftIconOnPress?: () => void
  headerRightIconOnPress?: () => void
  headerTitle?: string
}

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = (props) => {
  const [foregroundHeight, setForegroundHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
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
          backgroundTranslateYAnimatedStyle,
          backgroundOpacityAnimatedStyle,
          props.backgroundStyle,
        ]}>
        {props.background}
      </Animated.View>
    )
  }
  const renderForeground = () => {
    return (
      <View
        style={[foregroundAnimatedStyle, props.foregroundStyle]}
        onLayout={(e) => setForegroundHeight(e.nativeEvent.layout.height)}>
        {props.foreground}
      </View>
    )
  }
  const renderMainContent = () => {
    return (
      <Animated.View
        style={[
          { minHeight: themeConstants.screenHeight - foregroundHeight - headerHeight },
          props.mainContentRoundedTopBorders && mainContentBorderRadiusAnimatedStyle,
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
          !props.headerShownOnScroll0 && headerDelayedOpacityAnimatedStyle,
        ]}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              width: '200%',
              height: '100%',
              backgroundColor: props.headerBackgroundColor ? props.headerBackgroundColor : colors.primaryColor,
            },
            headerDelayedOpacityAnimatedStyle,
          ]}
        />
        <Box
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          flexDirection="row"
          paddingLeft="m"
          paddingRight="m"
          paddingTop="s"
          paddingBottom="s">
          {props.headerLeftIcon && (
            <TouchableOpacity onPress={() => props.headerLeftIconOnPress && props.headerLeftIconOnPress()}>
              <Icon name={props.headerLeftIcon.name} size={props.headerLeftIcon.size} />
            </TouchableOpacity>
          )}
          {props.headerTitle && (
            <AnimatedText style={headerDelayedOpacityAnimatedStyle}>{props.headerTitle}</AnimatedText>
          )}
          {props.headerRightIcon && (
            <TouchableOpacity onPress={() => props.headerRightIconOnPress && props.headerRightIconOnPress()}>
              <Icon name={props.headerRightIcon.name} size={props.headerRightIcon.size} />
            </TouchableOpacity>
          )}
        </Box>
      </Animated.View>
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
