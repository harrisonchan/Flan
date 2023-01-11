import { useTheme } from '@shopify/restyle'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import Animated, { concat, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import { theme, Theme } from '../theme'
import Avatar from './Avatar'
import Box from './Box'
import Button from './Button'
import Collapsible from './Collapsible'
import Text from './Text'

// TODO
// Implement Logic to allow revote if poster allows it

interface PollListItemProps {
  poster: { avatar: string | number; name: string; username: string }
  user: { selectedPollOption: string }
  poll: {
    title: string
    description: string
    options: { id: string; title: string; votes: number; image?: { uri: string } }[]
    datePosted: dayjs.Dayjs
    chat: string[]
  }
  onLongPress?: () => void
}

const COLLAPSED_HEIGHT = theme.themeConstants.componentHeightM
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
  return (
    <>
      <Collapsible
        isCollapsed
        collapsedHeight={COLLAPSED_HEIGHT}
        uncollapsedHeight={UNCOLLAPSED_HEIGHT}
        onContentHeightChange={(contentHeight) => {
          chatOptionsBarSharedAnimatedValue.value = contentHeight
        }}
        style={{ overflow: 'hidden', backgroundColor: colors.lightColor }}
        onLongPress={props.onLongPress}
        touchableOpacityProps={{ activeOpacity: 0.7 }}>
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
          <AnimatedBox style={[chatOptionsBarChevronAnimatedStyle]}>
            <Icon name={'chevron-down-outline'} size={themeConstants.largeIconSize} color={colors.secondaryColor} />
          </AnimatedBox>
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
        {/* Box containing two buttons in a single row with margins themeConstants.m on both sides, one of thhe button contains a <Text> saying "Vote" while the other says "Comment" */}
        <AnimatedBox flexDirection="row" padding="m" style={[voteCommentSectionOpacity]}>
          <Button mode="small" label="Vote" />
          <Button mode="small" label="Comment" style={{ marginLeft: spacing.m }} />
        </AnimatedBox>
      </Collapsible>
    </>
  )
}

export default PollListItem
