import { useTheme } from '@shopify/restyle'
import { PollType } from '@types'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import Animated, { concat, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import { theme, Theme } from '@theme'
import { Avatar, Box, Button, Collapsible, CollapsibleProps, Text } from '@components'
// import Box from './Box/Box'

// TODO
// Implement Logic to allow revote if poster allows it

interface PollListItemProps {
  poster: { avatar: string | number; name: string; username: string }
  user: { selectedPollOption: string }
  poll: PollType
  onLongPress?: () => void
  mode?: 'default' | 'touchableCollapsedViewOnly'
  useLongPressActionOnPress?: boolean
  collapsibleProps?: CollapsibleProps
}

const COLLAPSED_HEIGHT = theme.themeConstants.componentHeightM * 1.05
const UNCOLLAPSED_HEIGHT = theme.themeConstants.componentHeightXL * 1.1

const PollListItem: React.FC<PollListItemProps> = (props) => {
  const AnimatedBox = Animated.createAnimatedComponent(Box)
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const formik = useFormik({
    initialValues: {
      selectedPollOption: props.user.selectedPollOption ?? '',
      alreadyVoted: props.user.selectedPollOption == '' ? false : true,
    },
    onSubmit: () => {},
  })
  // const [selectedPollOption, setSelectedPollOption] = useState('')
  const chatOptionsBarSharedAnimatedValue = useSharedValue(COLLAPSED_HEIGHT)
  const chatOptionsBarChevronAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(chatOptionsBarSharedAnimatedValue.value, [COLLAPSED_HEIGHT, UNCOLLAPSED_HEIGHT], [0, -180])}deg`,
        },
      ],
    }
  })
  const voteCommentSectionOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(chatOptionsBarSharedAnimatedValue.value, [COLLAPSED_HEIGHT, UNCOLLAPSED_HEIGHT], [0, 1]),
    }
  })
  const handleSelectOption = (option: string) => {
    if (!formik.values.alreadyVoted) {
      formik.setFieldValue('selectedPollOption', formik.values.selectedPollOption == option ? '' : option)
    }
  }
  const renderDefault = () => {}
  return (
    <>
      <Collapsible
        isCollapsed
        collapsedHeight={COLLAPSED_HEIGHT}
        uncollapsedHeight={props.mode == 'touchableCollapsedViewOnly' ? COLLAPSED_HEIGHT : UNCOLLAPSED_HEIGHT}
        onContentHeightChange={(contentHeight) => {
          chatOptionsBarSharedAnimatedValue.value = contentHeight
        }}
        style={{ overflow: 'hidden', backgroundColor: colors.lightColor }}
        onPress={() => {
          props.mode == 'touchableCollapsedViewOnly' && props.useLongPressActionOnPress && props.onLongPress && props.onLongPress()
        }}
        onLongPress={props.onLongPress}
        touchableOpacityProps={{ activeOpacity: 0.7 }}
        {...props.collapsibleProps}>
        <AnimatedBox
          flexDirection="row"
          bottom={0}
          left={0}
          paddingLeft="m"
          paddingRight="m"
          paddingBottom="xs"
          position="absolute"
          alignItems={'center'}
          backgroundColor="lightColor"
          minHeight={themeConstants.componentHeightXS}
          zIndex={100}>
          <AnimatedBox flexDirection="row" alignItems="center">
            <Icon name="checkbox-outline" size={themeConstants.smallIconSize} color={colors.subduedText} />
            <Text variant="secondary" marginLeft="xs">
              {props.poll.options.length}
            </Text>
          </AnimatedBox>
          <AnimatedBox flexDirection="row" alignItems="center" marginLeft="s" flex={1}>
            <Icon name="chatbox-outline" size={themeConstants.smallIconSize} color={colors.subduedText} />
            <Text variant="secondary" marginLeft="xs">
              {props.poll.chat.length}
            </Text>
          </AnimatedBox>
          {props.mode != 'touchableCollapsedViewOnly' && (
            <AnimatedBox style={[chatOptionsBarChevronAnimatedStyle]}>
              <Icon name={'chevron-down-outline'} size={themeConstants.largeIconSize} color={colors.secondaryColor} />
            </AnimatedBox>
          )}
        </AnimatedBox>
        <Box padding="m" overflow="hidden">
          <Box flexDirection="row" alignItems="center">
            <Avatar source={props.poster.avatar} />
            <Box marginLeft="m">
              <Text>{props.poster.username}</Text>
              <Text variant="secondary">{props.poll.datePosted.toString()}</Text>
            </Box>
          </Box>
          <Text>{props.poll.title}</Text>
          <Box minHeight={themeConstants.componentHeightXXS}>
            <Text variant="tertiary">{props.poll.description}</Text>
          </Box>
        </Box>
        {props.mode != 'touchableCollapsedViewOnly' && (
          <Box maxHeight={themeConstants.componentHeightM * 0.9}>
            <FlatList
              data={props.poll.options}
              // // style={{ marginBottom: spacing.xxl }}
              showsVerticalScrollIndicator={false}
              // style={{ height: 10, backgroundColor: 'red' }}
              // refreshing={false}
              // collapsable
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => handleSelectOption(item.id)}>
                    <Box
                      flexDirection="row"
                      backgroundColor={
                        formik.values.alreadyVoted && formik.values.selectedPollOption == item.id
                          ? 'secondaryColor'
                          : formik.values.selectedPollOption == item.id
                          ? 'primaryColor'
                          : 'subduedText'
                      }
                      alignItems="center"
                      marginLeft="m"
                      marginRight="m"
                      marginBottom="s"
                      padding="s"
                      borderRadius={5}>
                      <Box flex={1}>
                        <Text variant="tertiary">{item.title}</Text>
                      </Box>
                      <Text variant="tertiary">{item.votes}</Text>
                    </Box>
                  </TouchableOpacity>
                )
              }}
            />
          </Box>
        )}
        <AnimatedBox flexDirection="row" padding="m" style={[voteCommentSectionOpacity]}>
          <Button mode="small" label="Vote" />
          <Button mode="small" label="Comment" style={{ marginLeft: spacing.m }} />
        </AnimatedBox>
      </Collapsible>
    </>
  )
}

export default PollListItem
