import { useTheme } from '@shopify/restyle'
import dayjs from 'dayjs'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Box, NavigationHeader, StatusBarPadding, Text } from '../../components'
import { Theme } from '../../theme'
import { ChatStackNavigationProps, ProfileStackNavigationProps } from '../../types'

const DUMMY_DATA = [
  { chatId: '0', chatTitle: 'Chat 1', lastSentMessage: { message: 'Hello', date: dayjs().subtract(6, 'day') } },
  { chatId: '1', chatTitle: 'Chat 2', lastSentMessage: { message: 'Hello', date: dayjs().subtract(5, 'day') } },
  { chatId: '2', chatTitle: 'Chat 3', lastSentMessage: { message: 'Hello', date: dayjs().subtract(4, 'day') } },
  { chatId: '3', chatTitle: 'Chat 4', lastSentMessage: { message: 'Hello', date: dayjs().subtract(3, 'day') } },
  { chatId: '4', chatTitle: 'Chat 5', lastSentMessage: { message: 'Hello', date: dayjs().subtract(2, 'day') } },
  { chatId: '5', chatTitle: 'Chat 6', lastSentMessage: { message: 'Hello', date: dayjs() } },
]

interface ChatInboxRow {
  chatTitle: string
  lastSentMessage: { message: string; date: dayjs.Dayjs }
}

const ChatInboxRow: React.FC<ChatInboxRow> = (props) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  return (
    <Box height={themeConstants.componentHeightS} backgroundColor="red" borderWidth={1}>
      <Text>{props.chatTitle}</Text>
      <Text>{props.lastSentMessage.message}</Text>
      <Text>{props.lastSentMessage.date.toString()}</Text>
    </Box>
  )
}

const ChatInboxScreen = ({ route, navigation }: ChatStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const renderChatInboxHeader = () => {
    return (
      <>
        <Text>Inbox</Text>
      </>
    )
  }
  return (
    <>
      <StatusBarPadding />
      <NavigationHeader
        leftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
        leftIconOnPress={() => navigation.goBack()}
      />
      <Box alignSelf="center" width={themeConstants.containerWidth} marginTop="l" marginBottom="xl" flex={1}>
        <FlatList
          ListHeaderComponent={renderChatInboxHeader}
          data={DUMMY_DATA}
          renderItem={({ item, index }) => (
            <Box marginBottom="s">
              <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { chatId: item.chatId })}>
                <ChatInboxRow chatTitle={item.chatTitle} lastSentMessage={item.lastSentMessage} />
              </TouchableOpacity>
            </Box>
          )}
        />
      </Box>
    </>
  )
}

export default ChatInboxScreen
