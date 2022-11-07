import { useTheme } from '@shopify/restyle'
import React from 'react'
import { RegisteredStyle, View, ViewStyle, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'
import { Theme } from '../theme'
import { generateRandomColorFromPalette } from '../utilities/Colors'
import AnimatedIcon from './AnimatedIcon'
import Box from './Box'
import Illustration, { illustrationType, illustrationTypeArray } from './Illustration'
import TagList from './TagList'
import Text from './Text'

interface FlanCardProps {
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
  illustration?: illustrationType
}

const FlanCard: React.FC<FlanCardProps> = (props) => {
  const { colors, spacing, themeConstants, shadows } = useTheme<Theme>()
  const renderIllustration = () => {
    return (
      <Box position="absolute" right={moderateScale(10)} bottom={moderateScale(10)} opacity={0.5}>
        <Illustration
          illustration={
            props.illustration
              ? props.illustration
              : illustrationTypeArray[Math.floor(Math.random() * illustrationTypeArray.length)]
          }
          height={props.mode == 'small' ? themeConstants.smallIllustrationSize : themeConstants.illustrationSize}
          width={props.mode == 'small' ? themeConstants.smallIllustrationSize : themeConstants.illustrationSize}
          // fill={Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]}
          fill={generateRandomColorFromPalette()}
        />
      </Box>
    )
  }
  const renderDefault = () => {
    return (
      <>
        <TouchableOpacity
          style={[
            {
              width: themeConstants.componentWidthXL,
              height: themeConstants.componentHeightL,
              backgroundColor: colors.lightColor,
              borderRadius: 20,
              padding: spacing.m,
            },
            props.style,
          ]}
          onPress={() => {
            props.onPress && props.onPress()
          }}>
          {renderIllustration()}
          <Box width="60%">
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
            {/* <TagList tags={['Music', 'Fun', 'Animals', 'Gorillas', 'Zebras', 'Penguins']} /> */}
          </Box>
        </TouchableOpacity>
        <Box
          position="absolute"
          right={spacing.m}
          top={spacing.m}
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          height={themeConstants.iconSize * 1.25}
          width={themeConstants.iconSize * 1.25}>
          <AnimatedIcon
            toggleOffIconProps={{ name: 'heart-outline', size: themeConstants.iconSize, color: colors.darkColor }}
            toggleOnIconProps={{ name: 'heart', size: themeConstants.iconSize, color: colors.red }}
            isToggled={false}
          />
        </Box>
      </>
    )
  }
  const renderSmallCard = () => {
    return (
      <TouchableOpacity
        style={[
          {
            width: themeConstants.componentWidthM,
            height: themeConstants.componentHeightM,
            backgroundColor: colors.lightColor,
            borderRadius: 20,
            padding: spacing.m,
          },
          props.style,
        ]}
        onPress={() => {
          props.onPress && props.onPress()
        }}>
        {renderIllustration()}
        <Text variant="secondary" color="neutralText">
          {props.title}
        </Text>
        <Text variant="secondary">{props.author}</Text>
        <Text variant="tertiary" color="darkSecondaryColor">
          {props.location}
        </Text>
        {/* <Box flexDirection="row" marginBottom="m">
          <Icon
            name="people-outline"
            size={themeConstants.smallIconSize}
            color={colors.tertiaryColor}
            style={{ marginRight: spacing.s }}
          />
          <Text variant="tertiary" color="tertiaryColor">
            {props.numPeople.attending}
          </Text>
        </Box> */}
      </TouchableOpacity>
    )
  }
  return <>{props.mode === 'small' ? renderSmallCard() : renderDefault()}</>
}

export default FlanCard
