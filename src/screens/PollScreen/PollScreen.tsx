import { useTheme } from '@shopify/restyle'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Box, Text, Button } from '@components'
import { Theme } from '@theme'

const PollScreen = () => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  return (
    <>
      <Box
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
        <Box flexDirection="row" alignItems="center">
          <Icon name="checkbox-outline" size={themeConstants.smallIconSize} color={colors.subduedText} />
          <Text variant="secondary" marginLeft="xs">
            {/* {props.poll.options.length} */}
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" marginLeft="s" flex={1}>
          <Icon name="chatbox-outline" size={themeConstants.smallIconSize} color={colors.subduedText} />
          <Text variant="secondary" marginLeft="xs">
            {/* {props.poll.chat.length} */}
          </Text>
        </Box>
        <Box>
          <Icon name={'chevron-down-outline'} size={themeConstants.largeIconSize} color={colors.secondaryColor} />
        </Box>
      </Box>
      <Box padding="m" overflow="hidden">
        <Box flexDirection="row" alignItems="center">
          {/* <Avatar source={props.poster.avatar} /> */}
          <Box marginLeft="m">
            {/* <Text>{props.poster.username}</Text> */}
            {/* <Text variant="secondary">{props.poll.datePosted.toString()}</Text> */}
          </Box>
        </Box>
        {/* <Text>{props.poll.title}</Text> */}
        <Box minHeight={themeConstants.componentHeightXXS}>{/* <Text variant="tertiary">{props.poll.description}</Text> */}</Box>
      </Box>
      <Box maxHeight={themeConstants.componentHeightM * 0.9}>
        <FlatList
          data={[]}
          //   data={props.poll.options}
          // // style={{ marginBottom: spacing.xxl }}
          showsVerticalScrollIndicator={false}
          // style={{ height: 10, backgroundColor: 'red' }}
          // refreshing={false}
          // collapsable
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
              //   onPress={() => handleSelectOption(item.id)}
              >
                <Box
                  flexDirection="row"
                  backgroundColor={
                    'darkColor'
                    // formik.values.alreadyVoted && formik.values.selectedPollOption == item.id
                    //   ? 'secondaryColor'
                    //   : formik.values.selectedPollOption == item.id
                    //   ? 'primaryColor'
                    //   : 'subduedText'
                  }
                  alignItems="center"
                  marginLeft="m"
                  marginRight="m"
                  marginBottom="s"
                  padding="s"
                  borderRadius={5}>
                  <Box flex={1}>{/* <Text variant="tertiary">{item.title}</Text> */}</Box>
                  {/* <Text variant="tertiary">{item.votes}</Text> */}
                </Box>
              </TouchableOpacity>
            )
          }}
        />
      </Box>
      {/* Box containing two buttons in a single row with margins themeConstants.m on both sides, one of thhe button contains a <Text> saying "Vote" while the other says "Comment" */}
      <Box flexDirection="row" padding="m">
        <Button mode="small" label="Vote" />
        <Button mode="small" label="Comment" style={{ marginLeft: spacing.m }} />
      </Box>
    </>
  )
}

export default PollScreen
