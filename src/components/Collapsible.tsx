import { useTheme } from '@shopify/restyle'
import React, { useEffect, useRef, useState } from 'react'
import { NativeEventEmitter, NativeSyntheticEvent, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming, onChange, useDerivedValue, runOnJS } from 'react-native-reanimated'
import { theme, Theme } from '../theme'
import { ViewStyleType } from '../types'
import Box from './Box/Box'
import Button from './Button'

export interface CollapsibleProps {
  isCollapsed?: boolean
  onCollapseChange?: (collapsed: boolean) => void
  onContentHeightChange?: (contentHeight: number) => void
  onPress?: () => void
  onLongPress?: () => void
  collapsedHeight?: number
  uncollapsedHeight?: number
  style?: ViewStyleType
  collapseTime?: number
  touchableOpacityProps?: TouchableOpacityProps
}

const DEFAULT_COLLAPSED_HEIGHT = theme.themeConstants.componentHeightM
const DEFAULT_UNCOLLAPSED_HEIGHT = theme.themeConstants.componentHeightXXL

const Collapsible: React.FC<CollapsibleProps> = (props) => {
  //A Collapsible Card Component using React Native Reanimated 2 with a <TouchableOpacity/>
  //that animates the height of the card to a specified height from CollapsibleProps
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
  const [isCollapsed, setIsCollapsed] = useState(props.isCollapsed ?? false)
  const collapsedHeight = props.collapsedHeight ?? DEFAULT_COLLAPSED_HEIGHT
  const heightAnimatedSharedValue = useSharedValue(collapsedHeight)
  const animatedHeightStyle = useAnimatedStyle(() => {
    'worklet'
    return {
      height: heightAnimatedSharedValue.value,
    }
  })
  const { colors, themeConstants } = useTheme<Theme>()
  const toggleCollapse = () => {
    props.onCollapseChange && props.onCollapseChange(!isCollapsed)
    setIsCollapsed(!isCollapsed)
    if (isCollapsed) {
      heightAnimatedSharedValue.value = withTiming(props.uncollapsedHeight ?? DEFAULT_UNCOLLAPSED_HEIGHT, {
        duration: props.collapseTime ?? 250,
        easing: Easing.inOut(Easing.ease),
      })
    } else {
      heightAnimatedSharedValue.value = withTiming(collapsedHeight, { duration: props.collapseTime ?? 250, easing: Easing.inOut(Easing.ease) })
    }
  }
  useDerivedValue(() => {
    props.onContentHeightChange && runOnJS(props.onContentHeightChange)(heightAnimatedSharedValue.value)
    // setContentHeight(heightAnimatedSharedValue.value)
  })
  return (
    <>
      <AnimatedTouchableOpacity
        style={[
          {
            backgroundColor: colors.light,
            borderRadius: 10,
            width: themeConstants.componentWidthXL,
            alignSelf: 'center',
          },
          animatedHeightStyle,
          props.style,
        ]}
        onPress={() => {
          toggleCollapse()
          props.onPress && props.onPress()
        }}
        onLongPress={() => {
          props.onLongPress && props.onLongPress()
        }}
        {...props.touchableOpacityProps}>
        {props.children}
      </AnimatedTouchableOpacity>
    </>
  )
}

export default Collapsible
