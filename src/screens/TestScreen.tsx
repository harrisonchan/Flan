import { useTheme } from '@shopify/restyle'
import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { Button, Chat, StatusBarPadding } from '../components'
import { RootTabsNavigationProps } from '../types'
import { useAppSelector } from '../redux'
import { appActions } from '../redux/features'
import { Theme } from '../theme'

const TestScreen = ({ route, navigation }: RootTabsNavigationProps) => {
  const dispatch = useDispatch()
  const colorScheme = useAppSelector((state) => state.utilityReducer.colorScheme)
  const { colors } = useTheme<Theme>()
  const renderItem = () => {
    const arr = Array(100).fill('hello')
    return (
      <View style={{ height: 100, width: '100%', backgroundColor: 'beige', padding: 10 }}>
        <FlatList horizontal data={arr} renderItem={({ item }) => <Text> {item} </Text>} />
      </View>
    )
  }
  return (
    <View style={{ backgroundColor: colors.mainBackground, flex: 1 }}>
      <StatusBarPadding />
      {/* <Icon name="add-circle-outline" size={40} />
      <View style={{ backgroundColor: 'red' }}>
        <Text>hello world</Text>
      </View> */}
      <Chat
        messages={[
          {
            date: dayjs(),
            sender: { id: '12309123', name: 'Harrison Chan', avatar: 'https://placeimg.com/140/140/any' },
            message: 'hello sexy!',
          },
        ]}
      />
      <Button
        label="switch theme"
        onPress={() => dispatch(appActions.utilityActions.setColorScheme(colorScheme == 'light' ? 'dark' : 'light'))}
      />
    </View>
  )
}

export default TestScreen
