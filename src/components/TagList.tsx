import { useTheme } from '@shopify/restyle'
import React from 'react'
import { View, FlatList } from 'react-native'
import {} from 'react-native-gesture-handler'
import { Theme } from '../theme'
import Box from './Box/Box'
import Text from './Text'

// type Tag = { label: string }
interface TagListProps {
  tags: string[]
}
const TagList: React.FC<TagListProps> = (props) => {
  const { colors, spacing } = useTheme<Theme>()
  return (
    <FlatList
      horizontal
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
      data={props.tags}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: colors.primaryColor,
            borderRadius: 10,
            padding: spacing.s,
            marginRight: spacing.s,
          }}>
          <Text variant="secondary" color="neutralText">
            {item}
          </Text>
        </View>
      )}
    />
  )
}
export default TagList
