import React, { useEffect, useState } from 'react'
import { Box, Button, Illustration, StatusBarPadding, Text, TextInput } from '../../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import { ColorValue, FlatList, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../../theme'
import { AddStackNavigationProps } from '../../../types'
import { illustrationType, illustrationTypeArray } from '../../../components/Illustration'
import { interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { generateRandomColorFromPalette } from '../../../utilities'
import { random } from 'lodash'
import NavigationHeader from '../../../components/NavigationHeader'

const AddNewOriginalStep2Screen = ({ route, navigation }: AddStackNavigationProps) => {
  const [illustrationsArray, setIllustrationsArray] = useState<illustrationType[]>([
    'illustration-animal',
    'illustration-bored',
    'illustration-business-plan',
    'illustration-business-travel',
    'illustration-car-drifting',
    'illustration-come-back-later',
    'illustration-cool-guy',
    'illustration-couple',
    'illustration-delete-confirmation',
    'illustration-delivery',
    'illustration-explore',
    'illustration-failure',
    'illustration-family',
    'illustration-fashion',
    'illustration-finances',
    'illustration-food',
    'illustration-freedom',
    'illustration-friends',
    'illustration-globe',
    'illustration-growth',
    'illustration-hangout',
    'illustration-health-research',
    'illustration-landscape',
    'illustration-location',
    'illustration-message-sent',
    'illustration-message-sent',
    'illustration-music',
    'illustration-news',
    'illustration-painter',
    'illustration-portrait',
    'illustration-relationship',
    'illustration-relax',
    'illustration-run',
    'illustration-science',
    'illustration-sports',
    'illustration-tasks',
    'illustration-technology',
    'illustration-travel',
    'illustration-wear-a-mask',
    'illustration-welcome',
    'illustration-work-from-home',
    'illustration-writing',
  ])
  const [randomColorArray, setRandomColorArray] = useState<ColorValue[]>([])
  const [selectedIllustration, setSelectedIllustration] = useState<null | number>(null)
  const [pickIllustrationButtonHeight, setPickIllustrationButtonHeight] = useState(100)
  useEffect(() => {
    const tempArr: ColorValue[] = []
    illustrationsArray.forEach(() => {
      tempArr.push(generateRandomColorFromPalette())
    })
    setRandomColorArray(tempArr)
  }, [])
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const animSharedValue = useSharedValue(1)
  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animSharedValue.value, [0, 1], [0.1, 1]),
  }))
  const renderIllustration = (illustrationType: illustrationType, index: number, fill?: ColorValue) => {
    return (
      <TouchableOpacity
        style={{
          width: '45%',
          margin: spacing.s,
        }}
        onPress={() => {
          selectedIllustration == index ? setSelectedIllustration(null) : setSelectedIllustration(index)
        }}>
        <Box borderRadius={20} backgroundColor="lightColor" height={themeConstants.componentHeightM}>
          <Illustration illustration={illustrationType} height="100%" width="100%" fill={fill} />
        </Box>
        <Box
          width="100%"
          height="100%"
          opacity={selectedIllustration == index ? 0.6 : 0}
          backgroundColor={selectedIllustration == index ? 'gold' : 'light'}
          position="absolute"
          borderRadius={20}
        />
      </TouchableOpacity>
    )
  }
  return (
    <>
      <StatusBarPadding />
      <Box flex={1} backgroundColor="mainBackground">
        <Box width={themeConstants.containerWidth} alignSelf="center" flex={1}>
          <Box flex={1}>
            <NavigationHeader
              leftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
              leftIconOnPress={() => navigation.goBack()}
            />
            <Text>Pick An Illustration For Your Flan</Text>
            <FlatList
              onMomentumScrollBegin={() => {
                animSharedValue.value = withTiming(0, { duration: 500 })
              }}
              onMomentumScrollEnd={() => {
                animSharedValue.value = withDelay(500, withTiming(1, { duration: 500 }))
              }}
              numColumns={2}
              removeClippedSubviews
              maxToRenderPerBatch={1}
              updateCellsBatchingPeriod={1}
              // extraData={pickIllustrationButtonHeight}
              initialNumToRender={1}
              data={illustrationsArray}
              contentContainerStyle={{ justifyContent: 'space-between' }}
              keyExtractor={(item, index) => item.toString() + index.toString()}
              renderItem={({ item, index }) => {
                return renderIllustration(item, index, randomColorArray[index])
              }}
              style={{ flex: 1 }}
              ListFooterComponent={() => (
                <View
                  style={{
                    height: spacing.l + spacing.m + pickIllustrationButtonHeight,
                  }}
                />
              )}
            />
          </Box>
          <View
            onLayout={(e) => setPickIllustrationButtonHeight(e.nativeEvent.layout.height)}
            style={{ position: 'absolute', bottom: spacing.m }}>
            <Button label="Pick Illustration" style={[buttonAnimatedStyle]} />
          </View>
        </Box>
      </Box>
    </>
  )
}

export default AddNewOriginalStep2Screen
