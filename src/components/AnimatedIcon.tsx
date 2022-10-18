import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Animated } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'

interface AnimatedIconProps {
  isToggled: boolean
  toggleOffIconProps: IconProps
  toggleOnIconProps: IconProps
}

const AnimatedIcon: React.FC<AnimatedIconProps> = (props) => {
  const AnimatedIconComponent = Animated.createAnimatedComponent(Icon)
  let animVal = new Animated.Value(400)
  const animatedTransition = Animated.spring(animVal, {
    toValue: 100,
    useNativeDriver: true,
  })
  useEffect(() => {
    Animated.timing(animVal, { toValue: 100, useNativeDriver: true }).start()
  }, [])
  return (
    <TouchableOpacity
      onPress={() => {
        // animatedTransition.start()
        Animated.timing(animVal, { toValue: 100, useNativeDriver: true }).start()
        console.log(animVal)
      }}>
      <AnimatedIconComponent name="heart" size={animVal} />
    </TouchableOpacity>
  )
}

export default AnimatedIcon
