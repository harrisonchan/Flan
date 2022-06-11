import React, { useEffect, useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ViewStyle,
  RegisteredStyle,
  ColorValue,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { generateRandomColor } from '../../utilities'

// interface TagsProps extends TouchableOpacityProps {
//   title: string
// }
interface TagProps {
  title: string
  touchable?: boolean
  tagColor?: ColorValue
  randomTagColor?: boolean
  style?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
}

const Tag: React.FC<TagProps> = (props) => {
  const [tagColor, setTagColor] = useState<ColorValue>(appStyles.colors.secondary)
  useEffect(() => {
    if (props.tagColor) {
      setTagColor(props.tagColor)
    } else if (props.randomTagColor) {
      setTagColor(generateRandomColor())
    }
  }, [])
  // const tagColor =  props.tagColor? props.tagColor: props.randomTagColor? '': appStyles.colors.secondary,
  return (
    <TouchableOpacity
      activeOpacity={props.touchable == false ? 1 : 0.2}
      style={[
        {
          backgroundColor: tagColor,
          borderRadius: 10,
          justifyContent: 'center',
          padding: moderateScale(3),
        },
        appStyles.spacingStyles.paddingLeftXXS,
        appStyles.spacingStyles.paddingRightXXS,
        props.style,
      ]}>
      <Text style={[{ color: appStyles.colors.primaryLight }, appStyles.typography.tertiary]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Tag
