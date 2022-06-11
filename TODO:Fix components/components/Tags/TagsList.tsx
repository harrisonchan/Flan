import React from 'react'
import { FlatList, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { generateRandomColor } from '../../utilities'
import Tag from './Tag'

interface TagsListProps {
  tags: string[]
  touchableTags?: boolean
  spaceBetweenTags?: number
  randomColoredTags?: boolean
}

const TagsList: React.FC<TagsListProps> = (props) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.tags}
      keyExtractor={(item, index) => item + index.toString()}
      renderItem={({ item }) => (
        <View
          style={[
            {
              marginLeft: props.spaceBetweenTags ? props.spaceBetweenTags / 2 : moderateScale(2),
              marginRight: props.spaceBetweenTags ? props.spaceBetweenTags / 2 : moderateScale(2),
            },
          ]}>
          <Tag title={item} touchable={props.touchableTags} randomTagColor={props.randomColoredTags} />
        </View>
      )}
    />
  )
}

export default TagsList
