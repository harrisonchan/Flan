//Made a really simple chat component. Wanted to use react-native-gifted-chat but wasn't what I wanted
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import ChatBox from './ChatBox'
import MessageInput from './MessageInput'
import { Message } from './types'

interface ChatProps {
  messages?: Message[]
}

const Chat: React.FC<ChatProps> = (props) => {
  const [messages, setMessages] = useState<Message[]>(props.messages ? props.messages : [])
  const currentChatter = { id: '0', name: 'Harrison Chan', avatar: 'https://placeimg.com/140/140/any' }
  useEffect(() => {
    console.log(messages)
  }, [messages])
  return (
    <View>
      <ChatBox currentChatter={currentChatter} messages={messages} />
      <MessageInput
        currentChatter={currentChatter}
        onSendMessage={(message) => {
          setMessages([...messages, message])
        }}
      />
    </View>
  )
}

export default Chat
