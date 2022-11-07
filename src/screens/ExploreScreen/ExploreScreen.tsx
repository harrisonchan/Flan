import { useTheme } from '@shopify/restyle'
import React from 'react'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { Box, FlanCard, SearchBar, StatusBarPadding, Text } from '../../components'
import { Theme } from '../../theme'
import { ExploreStackNavigationProps } from '../../types'

const ExploreScreen = ({ route, navigation }: ExploreStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const TEST_DATA = [
    {
      title: 'Go to the zoo',
      author: 'Joey Lo',
      location: "Harrison's House, Taipei, Taiwan",
      numPeople: { attending: 12 },
    },
    {
      title: 'Go to the zoo',
      author: 'Joey Lo',
      location: "Harrison's House, Taipei, Taiwan",
      numPeople: { attending: 89 },
    },
    {
      title: 'Go to the zoo',
      author: 'Joey Lo',
      location: "Harrison's House, Taipei, Taiwan",
      numPeople: { attending: 4 },
    },
  ]
  const renderItem = (
    item: {
      title: string
      author: string
      location: string
      numPeople: {
        attending: number
      }
    },
    index: number
  ) => {
    return (
      <Box marginRight="m" marginLeft={index == 0 ? 'containerInset' : 'none'}>
        <FlanCard
          mode="small"
          title={item.title}
          author={item.author}
          location={item.location}
          numPeople={item.numPeople}
          onPress={() => navigation.navigate('FlanScreen', { flanId: '1' })}
        />
      </Box>
    )
  }

  return (
    <>
      <StatusBarPadding />
      <ScrollView style={{ backgroundColor: colors.mainBackground }}>
        <Box alignSelf="center" marginTop="xl" marginBottom="l">
          <Text variant="header3" marginLeft="containerInset" marginBottom="s">
            Explore
          </Text>
          <TouchableOpacity
            style={{
              width: themeConstants.componentWidthXL,
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: colors.lightColor,
              padding: spacing.m,
            }}
            onPress={() => navigation.navigate('SearchScreen')}>
            <Text variant="secondary">Search Here...</Text>
          </TouchableOpacity>
          <Text marginLeft="containerInset" marginBottom="s" marginTop="m" color="primaryColor">
            Popular Near You
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TEST_DATA}
            renderItem={({ item, index }) => renderItem(item, index)}
          />
          <Text marginLeft="containerInset" marginBottom="s" marginTop="m" color="primaryColor">
            Editor Picks
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TEST_DATA}
            renderItem={({ item, index }) => renderItem(item, index)}
          />
          <Text marginLeft="containerInset" marginBottom="s" marginTop="m" color="primaryColor">
            Top Rated
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TEST_DATA}
            renderItem={({ item, index }) => renderItem(item, index)}
          />
        </Box>
      </ScrollView>
    </>
  )
}

export default ExploreScreen
