import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { LayoutChangeEvent, Text, TextProps, TouchableOpacity, View } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'
import { RootTabsNavigationProps, ViewStyleType } from '../types'

export interface NavigationHeaderProps {
  leftComponent?: React.ReactNode
  rightComponent?: React.ReactNode
  leftIconProps?: IconProps
  rightIconProps?: IconProps
  leftIconOnPress?: () => void
  rightIconOnPress?: () => void
  useLeftGoBackNavigationButton?: boolean
  title?: string
  titleProps?: TextProps
  style?: ViewStyleType
  onLayout?: (e: LayoutChangeEvent) => void
}

const NavigationHeader: React.FC<NavigationHeaderProps> = (props) => {
  const navigation = useNavigation()
  return (
    <View
      style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, props.style]}
      onLayout={(e) => {
        props.onLayout && props.onLayout(e)
      }}>
      {props.leftComponent ? (
        props.leftComponent
      ) : (
        <View style={{ width: '20%', alignItems: 'flex-start' }}>
          {props.useLeftGoBackNavigationButton ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => props.leftIconOnPress && props.leftIconOnPress()}>
              {props.leftIconProps && <Icon {...props.leftIconProps} />}
            </TouchableOpacity>
          )}
        </View>
      )}
      <View style={{ width: '60%', alignItems: 'center' }}>{props.title && <Text {...props.titleProps}>{props.title}</Text>}</View>
      {props.rightComponent ? (
        props.rightComponent
      ) : (
        <View style={{ width: '20%', alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => props.rightIconOnPress && props.rightIconOnPress()}>
            {props.rightIconProps && <Icon {...props.rightIconProps} />}
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default NavigationHeader
