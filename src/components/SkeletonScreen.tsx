import React, { useEffect } from 'react'
import { ColorValue, Dimensions, RegisteredStyle, View, ViewProps, ViewStyle } from 'react-native'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated'
import { ColorType, ViewStyleType } from '../types'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

interface SkeletonItemProps extends ViewProps {
  color?: ColorValue
  style?: ViewStyleType
  //Animation enabled by default
  enableAnimation?: boolean
}

const SkeletonItem: React.FC<SkeletonItemProps> = (props) => {
  const animVal = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animVal.value, [0, 1], [0.7, 1]),
  }))
  useEffect(() => {
    animVal.value = withRepeat(
      withTiming(1, {
        duration: 800 * (Math.random() * (1.2 - 0.8) + 0.8),
      }),
      -1,
      true
    )
  }, [])
  return <Animated.View {...props} style={[{ backgroundColor: props.color }, props.enableAnimation !== false && animatedStyle, props.style]} />
}

interface SkeletonScreenProps {
  type: 'ParallaxScrollView' | 'LargeMapView'
  color: ColorValue
  backgroundColor: ColorType
}

const SkeletonScreen: React.FC<SkeletonScreenProps> = (props) => {
  const renderSkeletonScreen = () => {
    switch (props.type) {
      case 'ParallaxScrollView':
        return (
          <>
            <SkeletonItem color={props.color} style={{ width: '100%', height: '35%', marginBottom: 10 }} />
            <SkeletonItem
              color={props.color}
              style={{
                width: '40%',
                height: '5%',
                marginBottom: 10,
                alignSelf: 'flex-start',
                marginLeft: SCREEN_WIDTH * 0.05,
              }}
            />
            <SkeletonItem color={props.color} style={{ width: '90%', height: '15%', marginBottom: 10 }} />
            <SkeletonItem
              color={props.color}
              style={{
                width: '40%',
                height: '3%',
                marginBottom: 10,
                alignSelf: 'flex-start',
                marginLeft: SCREEN_WIDTH * 0.05,
              }}
            />
            <SkeletonItem color={props.color} style={{ width: '90%', height: '30%', marginBottom: 10 }} />
          </>
        )
      case 'LargeMapView':
        return (
          <>
            <SkeletonItem color={props.color} style={{ width: '100%', height: '100%' }} />
          </>
        )
    }
  }
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: 'center',
        backgroundColor: props.backgroundColor,
      }}>
      {renderSkeletonScreen()}
    </View>
  )
}

export default SkeletonScreen
