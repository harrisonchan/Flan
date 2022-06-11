import React from 'react'
import { RegisteredStyle, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { SharedElement } from 'react-navigation-shared-element'
import Icon from '../Illustration'
import ProgressBar from '../ProgressBar'
import { TagsList } from '../Tags'

interface PlanCardProps {
  title: string
  author: string
  numPeople: { attending: number; total?: number }
  categories?: string[]
  progress?: { current: number; total: number }
  style?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  randomColoredCategories?: boolean
  onPress?: () => void
  sharedElement?: { titleId?: string }
}

const PlanCard: React.FC<PlanCardProps> = (props) => {
  const title = <Text style={appStyles.typography.smallTitle}>{props.title}</Text>
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: appStyles.colors.tertiary,
          width: appStyles.styleUtilities.WIDTH_L,
          // height: appStyles.styleUtilities.SCREEN_HEIGHT_S,
          borderRadius: appStyles.styleUtilities.BORDER_RADIUS_CARD,
        },
        appStyles.spacingStyles.paddingXS,
        appStyles.spacingStyles.paddingTopS,
        appStyles.spacingStyles.paddingBottomS,
        // appStyles.styles.centerContainer,
        props.style,
      ]}
      onPress={() => props.onPress && props.onPress()}>
      <View style={{ position: 'absolute', right: moderateScale(10), bottom: moderateScale(20), opacity: 0.75 }}>
        <Icon
          icon="illustration-wear-a-mask"
          height={moderateScale(100)}
          width={moderateScale(100)}
          fill={appStyles.colors.primary}
        />
      </View>
      <View>
        {props.sharedElement?.titleId ? <SharedElement id={props.sharedElement.titleId}>{title}</SharedElement> : title}
        <Text style={[{ color: appStyles.colors.secondaryDark }, appStyles.typography.body]}>
          Created by {props.author}
        </Text>
        <View
          style={[
            { alignItems: 'center' },
            appStyles.styles.flexRow,
            appStyles.spacingStyles.marginTopXS,
            props.progress && appStyles.spacingStyles.marginBottomXS,
          ]}>
          <Icon icon="person" height={appStyles.styleUtilities.ICON_XS} width={appStyles.styleUtilities.ICON_XS} />
          <Text
            style={[{ marginLeft: moderateScale(5), marginRight: moderateScale(5) }, appStyles.typography.secondary]}>
            {props.numPeople.attending}
          </Text>
          {props.categories && (
            <TagsList tags={props.categories} touchableTags={false} randomColoredTags={props.randomColoredCategories} />
          )}
        </View>
        {props.progress && (
          <ProgressBar
            progress={props.progress.current}
            maxProgress={props.progress.total}
            showPercentage
            width={appStyles.styleUtilities.WIDTH_M}
            progressColor={appStyles.colors.primaryLight}
            maxProgressColor={appStyles.colors.secondary}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default PlanCard
