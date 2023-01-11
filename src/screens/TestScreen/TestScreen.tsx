import { useTheme } from '@shopify/restyle'
import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, View, TouchableOpacity, Animated, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { AnimatedIcon, Box, Text, Button, Chat, StatusBarPadding, Collapsible, TextInput } from '../../components'
import { RootTabsNavigationProps, TestStackNavigationProps } from '../../types'
import { useAppSelector } from '../../redux'
import { appActions } from '../../redux/features'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { userApiActions } from '../../api/userApi'
import axios, { AxiosResponse } from 'axios'
import TestScreenFlanApi from './api/FlanApi'
import TestScreenUserApi from './api/UserApi'
import TestScreeUtilities from './Utilities'
import TestScreenGroup from './TestScreenGroup'
import { CalendarList } from 'react-native-calendars'
import DropDownPicker from 'react-native-dropdown-picker'
import PollListItem from '../../components/PollListItem'

const TestScreen = ({ route, navigation }: TestStackNavigationProps) => {
  const dispatch = useDispatch()
  const colorScheme = useAppSelector((state) => state.utilityReducer.colorScheme)
  const { colors, themeConstants } = useTheme<Theme>()
  const renderItem = () => {
    const arr = Array(100).fill('hello')
    return (
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: 'beige',
          padding: 10,
        }}>
        <FlatList horizontal data={arr} renderItem={({ item }) => <Text> {item} </Text>} />
      </View>
    )
  }

  const animVal = new Animated.Value(0)
  const testFlan = useAppSelector((state) => state.userReducer.user.createdFlans[0])
  const [response, setResponse] = useState<AxiosResponse | {}>({})
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ])
  return (
    <View style={{ backgroundColor: colors.mainBackground, flex: 1 }}>
      <StatusBarPadding />
      {/* <Collapsible isCollapsed={false} collapsedHeight={200} uncollapsedHeight={500} /> */}
      <PollListItem
        poll={{
          title: 'poll',
          description: 'desc',
          options: [
            { id: '1', title: 'option title', votes: 1 },
            { id: '2', title: 'option title', votes: 1 },
            { id: '3', title: 'option title', votes: 1 },
            { id: '4', title: 'option title', votes: 1 },
            { id: '5', title: 'option title', votes: 1 },
            { id: '6', title: 'option title', votes: 1 },
            { id: '7', title: 'option title', votes: 1 },
            { id: '8', title: 'option title', votes: 1 },
            { id: '9', title: 'option title', votes: 1 },
          ],
          datePosted: dayjs(),
          chat: ['asdfsadfsdf'],
        }}
        poster={{ avatar: 1, name: 'name', username: 'uname' }}
        user={{ selectedPollOption: '3' }}
        onLongPress={() => navigation.navigate('PollStack', { screen: 'PollScreen' })}
      />
      <Text>Testing buzz buzz</Text>
      <ScrollView>
        <TextInput
          innerLabel
          label="Birthday"
          labelColor={colors.primaryColor}
          // placeholder="Select your gender"
          // onChangeText={formik.handleChange('gender')}
          // onBlur={formik.handleBlur('gender')}
          // useValidation={{
          //   isValid: !isString(formik.errors.gender),
          //   showValidationIcon: formik.touched.gender,
          //   invalidInputMessage: formik.touched.gender ? formik.errors.gender : undefined,
          // }}
          // containerStyle={{ marginBottom: spacing.l }}
          textInputProps={{ autoCapitalize: 'none', spellCheck: false }}
          mode="birthday"
          containerStyle={{ height: 500 }}
        />
        <Box width={320}>
          <CalendarList
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {
              console.log('now these months are visible', months)
            }}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={120}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={0}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable horizontal scrolling, default = false
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
            // Set custom calendarWidth.
            calendarWidth={320}
            // calendarStyle={{ width: 320 }}
          />
        </Box>
        <TestScreenGroup title="API">
          <Box marginTop="s" minHeight={themeConstants.screenHeight * 0.05} maxHeight={themeConstants.screenHeight * 0.4} backgroundColor="violet" padding="s">
            <Text variant="secondary" marginTop={'s'} marginBottom={response == '' ? 'none' : 's'}>
              Response
            </Text>
            <ScrollView nestedScrollEnabled>
              {response !== undefined && (
                <Text variant="tertiary" color={'light'}>
                  {(function () {
                    try {
                      return JSON.stringify(response.data)
                    } catch (error) {
                      console.log('error parsing json: ', error)
                    }
                  })()}
                </Text>
              )}
            </ScrollView>
            <Button
              label="Clear"
              mode="small"
              style={{ marginTop: response == '' ? 0 : 10, marginBottom: 5 }}
              onPress={() => {
                setResponse('')
              }}
            />
          </Box>
          <TestScreenUserApi
            onResponse={(res) => {
              setResponse(res)
            }}
          />
          <TestScreenFlanApi
            onResponse={(res) => {
              setResponse(res)
            }}
          />
        </TestScreenGroup>
        <TestScreenGroup title="Utilities">
          <TestScreeUtilities />
        </TestScreenGroup>
      </ScrollView>
    </View>
  )
}

export default TestScreen
