import React from 'react'
import { Text, TextProps, TouchableOpacity, View } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleType } from '../types'

interface NavigationHeaderProps {
  leftIconProps?: IconProps
  rightIconProps?: IconProps
  leftIconOnPress?: () => void
  rightIconOnPress?: () => void
  title?: string
  titleProps?: TextProps
  style?: StyleType
}

const NavigationHeader: React.FC<NavigationHeaderProps> = (props) => {
  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, props.style]}>
      <View style={{ width: '20%', alignItems: 'flex-start' }}>
        <TouchableOpacity onPress={() => props.leftIconOnPress && props.leftIconOnPress()}>
          {props.leftIconProps && <Icon {...props.leftIconProps} />}
        </TouchableOpacity>
      </View>
      <View style={{ width: '60%', alignItems: 'center' }}>
        {props.title && <Text {...props.titleProps}>{props.title}</Text>}
      </View>
      <View style={{ width: '20%', alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={() => props.rightIconOnPress && props.rightIconOnPress()}>
          {props.rightIconProps && <Icon {...props.rightIconProps} />}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NavigationHeader
