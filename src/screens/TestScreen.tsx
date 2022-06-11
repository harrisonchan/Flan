import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Chat } from '../components'

const TestScreen = () => {
  const renderItem = () => {
    const arr = Array(100).fill('hello')
    return (
      <View style={{ height: 100, width: '100%', backgroundColor: 'beige', padding: 10 }}>
        <FlatList horizontal data={arr} renderItem={({ item }) => <Text> {item} </Text>} />
      </View>
    )
  }
  return (
    <View>
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
    </View>
  )
}

export default TestScreen
