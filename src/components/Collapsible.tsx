import React, { useEffect, useRef, useState } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import Box from './Box'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import Text from './Text'

interface CollapsibleProps {}

const Collapsible: React.FC<CollapsibleProps> = (props) => {
  const [layoutHeight, setLayoutHeight] = useState(0)
  const AnimatedBox = Animated.createAnimatedComponent(Box)
  const AnimatedBoxRef = useRef(Box)
  const animVal = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animVal.value * layoutHeight,
    }
  })
  return (
    <>
      <Box flexDirection="row">
        <TouchableOpacity onPress={() => {}}>
          <Icon name="add-circle-outline" size={40} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log(layoutHeight)
          }}
        >
          <Icon name="remove-circle-outline" size={40} />
        </TouchableOpacity>
      </Box>
      <AnimatedBox
        backgroundColor="aqua"
        onLayout={(e) => {
          setLayoutHeight(e.nativeEvent.layout.height)
          // animVal.value = e.nativeEvent.layout.height
          // console.log('lh', e.nativeEvent.layout.height)
        }}
        ref={AnimatedBoxRef}
        height={animVal.value * layoutHeight}
        overflow="hidden"
        // style={[layoutHeight != 0 ? animatedStyle : {}]}
      >
        <Text>{layoutHeight}</Text>
        <Text>{animVal.value}</Text>
        {props.children}
      </AnimatedBox>
    </>
  )
}

export default Collapsible
