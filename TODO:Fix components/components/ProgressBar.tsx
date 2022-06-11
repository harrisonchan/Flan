import React, { useEffect, useState } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

interface ProgressBarProps {
  progress: number
  maxProgress: number
  rounded?: boolean
  width?: number
  height?: number
  progressColor?: string //Need to rewrite this
  maxProgressColor?: string //Need to rewrite this
  maxProgressOpacity?: number
  showPercentage?: boolean
  percentageStyle?: TextStyle[] | any
  containerStyle?: ViewStyle[] | ViewStyle
}

const defaultProps = {
  progress: 1,
  maxProgress: 2,
  rounded: true,
  progressColor: appStyles.colors.primary,
  maxProgressColor: appStyles.colors.secondaryDark,
  // maxProgressOpacity: 0.5,
}

// Not-animated right now...
const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const [percentage, setPercentage] = useState(0)
  const width = props.width ? props.width : appStyles.styleUtilities.WIDTH_L
  const SPACE_FOR_PERCENTAGE_TEXT = props.showPercentage ? 0.15 : 0
  useEffect(() => {
    setPercentage(Math.round((props.progress / props.maxProgress) * 100) / 100)
  }, [props])
  return (
    <View style={[{ width: width, alignItems: 'center' }, appStyles.styles.flexRow, props.containerStyle]}>
      <View
        style={{
          flexDirection: 'row',
          width: width * (1 - SPACE_FOR_PERCENTAGE_TEXT),
        }}>
        <View
          style={[
            props.maxProgressOpacity ? { opacity: props.maxProgressOpacity } : { opacity: 0.5 },
            { width: '100%' },
            props.height ? { height: props.height } : { height: moderateScale(10) },
            props.rounded && { borderRadius: 10 },
            props.maxProgressColor
              ? { backgroundColor: props.maxProgressColor }
              : { backgroundColor: appStyles.colors.primary },
          ]}
        />
        <View
          style={[
            { width: width * (1 - SPACE_FOR_PERCENTAGE_TEXT) * (props.progress / props.maxProgress) }, //This code fucking sucks
            props.height ? { height: props.height } : { height: moderateScale(10) },
            props.rounded &&
              (props.progress == props.maxProgress
                ? { borderRadius: 10 }
                : { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }),
            props.progressColor
              ? { backgroundColor: props.progressColor }
              : { backgroundColor: appStyles.colors.secondaryLight },
            { position: 'absolute' },
          ]}
        />
      </View>
      {props.showPercentage && (
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text
            style={[
              appStyles.typography.tertiary,
              props.percentageStyle && props.percentageStyle, //Do we need even need a condition?
            ]}>
            {percentage * 100}%
          </Text>
        </View>
      )}
    </View>
  )
}

ProgressBar.defaultProps = defaultProps

export default ProgressBar
