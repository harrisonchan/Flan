import dayjs from 'dayjs'
import React from 'react'
import { RegisteredStyle, View, ViewStyle } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PlanListItem from './PlanListItem'

interface PlanListProps {
  plans: { title: string; date: dayjs.Dayjs; numPeople: { attending: number; total?: number } }[]
  spaceBetweenPlanListItems?: number
  style?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
}

const PlanList: React.FC<PlanListProps> = (props) => {
  return (
    <FlatList
      style={props.style}
      data={props.plans}
      keyExtractor={(item, index) => item + index.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            marginTop: props.spaceBetweenPlanListItems
              ? props.spaceBetweenPlanListItems / 2
              : appStyles.styleUtilities.HEIGHT_XXS,
            marginBottom: props.spaceBetweenPlanListItems
              ? props.spaceBetweenPlanListItems / 2
              : appStyles.styleUtilities.HEIGHT_XXS,
          }}>
          <PlanListItem title={item.title} date={item.date} numPeople={{ attending: item.numPeople.attending }} />
        </View>
      )}
    />
  )
}

export default PlanList
