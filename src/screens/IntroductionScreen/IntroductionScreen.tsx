import { useTheme } from '@shopify/restyle'
import React from 'react'
import { FlatList } from 'react-native'
import { Box, Illustration, StatusBarPadding, Text, Button } from '../../components'
import { Theme } from '../../theme'
import { IntroductionStackNavigationProps } from '../../types'

const IntroductionScreen = ({ navigation }: IntroductionStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const IntroductionGallery = [
    {
      illustration: 'illustration-bored',
      title: 'Welcome to Flan',
      description: 'Kei Kurono was caught up in a situation where a homeless man has fallen into the tracks of the subway',
      color: colors.lightPrimaryColor,
      illustrationFill: colors.primaryColor,
    },
    {
      illustration: 'illustration-business-travel',
      title: 'Flan Events with Friends',
      description: 'A childhood friend of his suddenly appears at the same subway stop and has chosen to help this homeless man',
      color: colors.lightSecondaryColor,
      illustrationFill: colors.secondaryColor,
    },
    {
      illustration: 'illustration-couple',
      title: 'Have Fun!',
      description:
        "All eyes are on Kurono as if he doesn't help his friend and the homeless man, he is considered selfish for his own life; while, if he does help, he and his friend have a possibility of dying",
      color: colors.lightTertiaryColor,
      illustrationFill: colors.tertiaryColor,
    },
  ]
  return (
    <>
      <Box flex={1}>
        <FlatList
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={themeConstants.screenWidth}
          decelerationRate="fast"
          data={IntroductionGallery}
          style={{ flex: 1 }}
          renderItem={({ item, index }) => (
            <Box
              width={themeConstants.screenWidth}
              height={themeConstants.screenHeight}
              // justifyContent="center"
              alignItems="center"
              style={{ backgroundColor: item.color }}>
              <StatusBarPadding backgroundColor={item.color} />
              <Box position="absolute" width="100%" height="50%" bottom={spacing.xxxxl}>
                <Illustration illustration={item.illustration} width="100%" height="100%" fill={item.illustrationFill} />
              </Box>
              <Box justifyContent="center" alignItems="center" padding="l">
                <Text variant="header3" marginTop="xxxxl">
                  {item.title}
                </Text>
                <Text variant="body" marginTop="m">
                  {item.description}
                </Text>
              </Box>
              {index == IntroductionGallery.length - 1 && <Button label="Get Started" onPress={() => navigation.navigate('SignUpScreenInitial')} />}
            </Box>
          )}
        />
      </Box>
    </>
  )
}

export default IntroductionScreen
