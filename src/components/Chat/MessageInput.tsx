import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Message, Person } from './types'

interface MessageInputProps {
  currentChatter: Person
  onSendMessage: (message: Message) => void
}

const MessageInput: React.FC<MessageInputProps> = (props) => {
  const [message, setMessage] = useState('')
  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Enter your message"
          value={message}
          onChangeText={(input) => setMessage(input)}
        />
        <TouchableOpacity
          onPress={() => {
            if (message != '' && message.replace(/\s/g, '').length) {
              // const promise = new Promise((resolve, reject) => {
              //   props.onSendMessage({ date: dayjs(), message, sender: props.currentSender })
              //   resolve(null)
              // })
              // promise.then(() => setMessage(''))

              //Might run into actual problems here when interacting with server so will have to resort to above promise code or use async
              props.onSendMessage({ date: dayjs(), message, sender: props.currentChatter })
              setMessage('')
            }
          }}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default MessageInput
