import dayjs from 'dayjs'
import React from 'react'
import { RegisteredStyle, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { generateRandomColor } from '../../utilities'
import Icon from '../Illustration'
import { Tag } from '../Tags'

interface PlanListItemProps {
  title: string
  date: dayjs.Dayjs
  numPeople: { attending: number; total?: number }
  categories?: string[]
  progress?: { current: number; total: number }
  style?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
}

const PlanListItem: React.FC<PlanListItemProps> = (props) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: appStyles.styleUtilities.WIDTH_L,
          height: appStyles.styleUtilities.SCREEN_HEIGHT_XS * 1.22,
          borderRadius: appStyles.styleUtilities.BORDER_RADIUS_CARD,
          borderColor: appStyles.colors.secondary,
          //   borderWidth: 3,
          alignItems: 'center',
        },
        appStyles.styles.flexRow,
        appStyles.spacingStyles.paddingLeftXXS,
        appStyles.spacingStyles.paddingRightXXS,
        props.style,
      ]}>
      <View
        style={[
          {
            backgroundColor: appStyles.colors.tertiary,
            borderRadius: 10,
            overflow: 'hidden',
            width: appStyles.styleUtilities.WIDTH_XXS,
            height: appStyles.styleUtilities.SCREEN_HEIGHT_XS * 1.22,
          },
          appStyles.styles.centerContainer,
        ]}>
        <Icon
          icon="illustration-hangout"
          height={appStyles.styleUtilities.ICON_XL * 1.5}
          width={appStyles.styleUtilities.ICON_XL * 1.5}
          fill={appStyles.colors.tertiary}
        />
      </View>
      <View style={[appStyles.spacingStyles.marginLeftS, appStyles.spacingStyles.marginRightXS, { flex: 1 }]}>
        <Text style={[{ marginBottom: appStyles.styleUtilities.HEIGHT_XXS / 3 }, appStyles.typography.body]}>
          {props.title}
        </Text>
        <View style={[{}]}>
          <Text
            style={[
              { color: appStyles.colors.secondary, marginBottom: appStyles.styleUtilities.HEIGHT_XXS / 3 },
              appStyles.typography.secondary,
            ]}>
            {props.date.format('DD MMM')}
          </Text>
          <View style={[{ alignItems: 'center' }, appStyles.styles.flexRow]}>
            <Icon
              icon="person"
              height={appStyles.styleUtilities.ICON_XS}
              width={appStyles.styleUtilities.ICON_XS}
              fill={appStyles.colors.secondaryDark}
            />
            <Text
              style={[
                { marginLeft: moderateScale(5), marginRight: moderateScale(5), color: appStyles.colors.secondaryDark },
                appStyles.typography.body,
              ]}>
              {props.numPeople.attending}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Icon
          icon="chevron-right"
          height={appStyles.styleUtilities.ICON_M}
          width={appStyles.styleUtilities.ICON_M}
          fill={appStyles.colors.secondaryLight}
        />
      </View>
      {/* <View style={[{ alignItems: 'center' }, appStyles.styles.flexRow, appStyles.spacingStyles.marginTopXS]}>
        <View style={[{ flex: 1 }, appStyles.styles.flexRow]}>
          <Icon icon="person" height={appStyles.styleUtilities.ICON_XS} width={appStyles.styleUtilities.ICON_XS} />
          <Text
            style={[{ marginLeft: moderateScale(5), marginRight: moderateScale(5) }, appStyles.typography.tertiary]}>
            {props.numPeople.attending}
          </Text>
        </View>
        <Tag title="test" />
      </View> */}
    </TouchableOpacity>
  )
}

export default PlanListItem
