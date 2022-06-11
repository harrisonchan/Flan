import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { FlatList, Text, View } from 'react-native'
import { Message, Person } from './types'
import MessageInput from './MessageInput'

interface ChatBoxProps {
  messages: Message[]
  currentChatter: Person
}

const ChatBox: React.FC<ChatBoxProps> = (props) => {
  // const [messages, setMessages] = useState<Message[]>(props.messages)
  // useEffect(() => {

  // }, [props.messages]);
  const renderMessage = (message: Message) => {
    return (
      <>
        <Text>{message.message}</Text>
      </>
    )
  }
  return (
    <>
      <FlatList
        data={props.messages}
        keyExtractor={(item, index) => item.toString() + index.toString()}
        renderItem={({ item }) => renderMessage(item)}
      />
    </>
  )
}

export default ChatBox
