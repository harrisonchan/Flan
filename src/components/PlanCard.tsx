import { useTheme } from '@shopify/restyle'
import React from 'react'
import { RegisteredStyle, View, ViewStyle, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'
import { Theme } from '../theme'
import Box from './Box'
import Illustration from './Illustration'
import TagList from './TagList'
import Text from './Text'

interface PlanCardProps {
  mode?: 'default' | 'small'
  onPress?: () => void
  title: string
  author: string
  numPeople: { attending: number; total?: number }
  location?: string
  categories?: string[]
  progress?: { current: number; total: number }
  style?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  //   randomColoredCategories?: boolean
}

const PlanCard: React.FC<PlanCardProps> = (props) => {
  const { colors, spacing, themeConstants, shadows } = useTheme<Theme>()
  const renderDefault = () => {
    return (
      <TouchableOpacity
        style={[
          {
            width: themeConstants.largeComponentWidth,
            height: themeConstants.largeComponentHeight,
            backgroundColor: colors.light,
            borderRadius: 20,
            padding: spacing.m,
          },
          props.style,
        ]}
        onPress={() => {
          props.onPress && props.onPress()
        }}>
        <Box position="absolute" right={moderateScale(10)} bottom={moderateScale(10)} opacity={0.5}>
          <Illustration
            illustration="illustration-hangout"
            height={themeConstants.illustrationSize}
            width={themeConstants.illustrationSize}
            fill={colors.secondaryColor}
          />
        </Box>
        <Box>
          <Text variant="header3">{props.title}</Text>
          {props.location && (
            <Text variant="secondary" marginBottom="xs" color="darkSecondaryColor">
              {props.location}
            </Text>
          )}
          <Text variant="secondary" marginBottom="xs">
            Created by{props.author}
          </Text>
          <Box flexDirection="row" marginBottom="m">
            <Icon
              name="people-outline"
              size={themeConstants.smallIconSize}
              color={colors.tertiaryColor}
              style={{ marginRight: spacing.s }}
            />
            <Text variant="tertiary" color="tertiaryColor">
              {props.numPeople.attending}
            </Text>
          </Box>
          <View onStartShouldSetResponder={() => true}></View>
          <TagList tags={['Music', 'Fun', 'Animals', 'Gorillas', 'Zebras', 'Penguins']} />
        </Box>
      </TouchableOpacity>
    )
  }
  const renderSmallCard = () => {
    return (
      <TouchableOpacity
        style={[
          {
            width: themeConstants.smallComponentWidth,
            height: themeConstants.smallComponentHeight,
            backgroundColor: colors.light,
            borderRadius: 20,
            padding: spacing.m,
          },
          props.style,
        ]}>
        <Box position="absolute" right={moderateScale(10)} bottom={moderateScale(10)} opacity={0.5}>
          <Illustration
            illustration="illustration-hangout"
            height={themeConstants.smallIllustrationSize}
            width={themeConstants.smallIllustrationSize}
            fill={colors.secondaryColor}
          />
        </Box>
        <Text variant="secondary" color="neutralText">
          {props.title}
        </Text>
        <Text variant="secondary">{props.author}</Text>
        <Text variant="tertiary" color="darkSecondaryColor">
          {props.location}
        </Text>
        <Box flexDirection="row" marginBottom="m">
          <Icon
            name="people-outline"
            size={themeConstants.smallIconSize}
            color={colors.tertiaryColor}
            style={{ marginRight: spacing.s }}
          />
          <Text variant="tertiary" color="tertiaryColor">
            {props.numPeople.attending}
          </Text>
        </Box>
      </TouchableOpacity>
    )
  }
  return <>{props.mode === 'small' ? renderSmallCard() : renderDefault()}</>
}

export default PlanCard
