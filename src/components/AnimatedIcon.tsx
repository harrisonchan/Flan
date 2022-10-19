import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'

interface AnimatedIconProps {
  isToggled: boolean
  toggleOffIconProps: IconProps
  toggleOnIconProps: IconProps
}

const DEFAULT_ICON_SIZE = 40

const AnimatedIcon: React.FC<AnimatedIconProps> = (props) => {
  const [isToggled, setIsToggled] = useState(props.isToggled)
  const [iconSizing, setIconSizing] = useState({
    toggleOffSize: props.toggleOffIconProps.size ? props.toggleOffIconProps.size : DEFAULT_ICON_SIZE,
    toggleOnSize: props.toggleOnIconProps.size ? props.toggleOnIconProps.size : DEFAULT_ICON_SIZE,
  })
  const AnimatedIconComponent = Animated.createAnimatedComponent<IconProps>(Icon)
  const iconSizeSharedValue = useSharedValue(isToggled ? iconSizing.toggleOnSize : iconSizing.toggleOffSize)
  const AnimatedIconStyle = useAnimatedStyle(() => {
    return {
      fontSize: isToggled
        ? withSequence(
            withTiming(iconSizing.toggleOnSize * 1.25, {
              duration: 200,
              easing: Easing.elastic(0.9),
            }),
            withTiming(iconSizing.toggleOnSize, {
              duration: 200,
              easing: Easing.elastic(1),
            })
          )
        : iconSizing.toggleOffSize,
      transform: isToggled
        ? [
            {
              translateX: withSequence(
                withTiming(1, {
                  duration: 100,
                  easing: Easing.elastic(0.9),
                }),
                withTiming(0, {
                  duration: 100,
                  easing: Easing.elastic(1),
                }),
                withTiming(-1, {
                  duration: 100,
                  easing: Easing.elastic(1),
                }),
                withTiming(0, {
                  duration: 100,
                  easing: Easing.elastic(1),
                })
              ),
            },
          ]
        : [],
    }
  })
  return (
    <TouchableOpacity
      onPress={() => {
        setIsToggled(!isToggled)
      }}>
      <AnimatedIconComponent
        {...(isToggled ? props.toggleOnIconProps : props.toggleOffIconProps)}
        style={AnimatedIconStyle}
      />
    </TouchableOpacity>
  )
}

export default AnimatedIcon
