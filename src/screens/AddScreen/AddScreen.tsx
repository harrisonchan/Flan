import { useTheme } from '@shopify/restyle'
import React, { useState } from 'react'
import { ColorValue, RegisteredStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Box, Button, Illustration, StatusBarPadding, Text } from '../../components'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { AddStackNavigationProps } from '../../types'

interface SelectNewFlanTypeButtonProps {
  onPress: () => void
  title: string
  subtitle: string
  iconName: string
  style?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
}

const SelectNewFlanTypeButton: React.FC<SelectNewFlanTypeButtonProps> = (props) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Box
        width={themeConstants.componentWidthXL}
        height={themeConstants.componentHeightM * 0.6}
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        backgroundColor="lightColor"
        borderRadius={20}
        padding="l"
        style={props.style}>
        <Box backgroundColor="tertiaryColor" borderRadius={100} padding="s" marginRight="m">
          <Icon name={props.iconName} size={themeConstants.iconSize} color={colors.lightColor} />
        </Box>
        <Box flex={1}>
          <Text variant="secondary" color="primaryColor">
            {props.title}
          </Text>
          <Text variant="secondary">{props.subtitle}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

const AddScreen = ({ route, navigation }: AddStackNavigationProps) => {
  const [createNewScreenSelected, setCreateNewScreenSelected] = useState(true)
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  return (
    <>
      <StatusBarPadding />
      <Box
        // borderBottomLeftRadius={100}
        // borderBottomRightRadius={100}
        width="100%"
        overflow="hidden"
        backgroundColor="mainBackground">
        <Illustration
          illustration="illustration-hangout"
          height={themeConstants.componentHeightL}
          width="100%"
          fill={colors.secondaryColor}
        />
      </Box>
      <Box backgroundColor="mainBackground" flex={1}>
        <Box width={themeConstants.containerWidth} marginTop="xl" alignSelf="center" backgroundColor="mainBackground">
          <Text marginBottom="m" marginTop="m" variant="header3">
            Create A Flan
          </Text>
          <SelectNewFlanTypeButton
            iconName="brush"
            title="Create Your Own"
            subtitle="Create Your Own Flan To Have Fun With Friends"
            onPress={() => {
              navigation.navigate('AddNewOriginalInputFieldsScreen')
            }}
            style={{ marginBottom: spacing.l }}
          />
          <SelectNewFlanTypeButton
            iconName="earth"
            title="Choose From Community Flans"
            subtitle="Create A Flan Based On Community Flans"
            onPress={() => navigation.navigate('AddNewFromCommunityScreen')}
          />
        </Box>
      </Box>
    </>
  )
}

export default AddScreen
