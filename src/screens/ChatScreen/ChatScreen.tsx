import React, { useState, useCallback, useEffect } from 'react'
import { Button, NavigationHeader, StatusBarPadding, Text } from '../../components'
import { GiftedChat } from 'react-native-gifted-chat'
import { ChatStackNavigationProps, ProfileStackNavigationProps } from '../../types'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../theme'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const ChatScreen = ({ route, navigation }: ChatStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      // {
      //   _id: 17,
      //   text: 'Hello developer',
      //   createdAt: new Date(),
      //   user: {
      //     _id: 2,
      //     name: 'React Native',
      //     avatar: 'https://placeimg.com/140/140/any',
      //   },
      // },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <>
      <StatusBarPadding />
      <NavigationHeader
        leftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
        leftIconOnPress={() => navigation.goBack()}
      />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 18,
        }}
      />
    </>
  )
}

export default ChatScreen
