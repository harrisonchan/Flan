import { useTheme } from '@shopify/restyle'
import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, View, TouchableOpacity, Animated, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { AnimatedIcon, Box, Text, Button, Chat, StatusBarPadding } from '../../components'
import { RootTabsNavigationProps } from '../../types'
import { useAppSelector } from '../../redux'
import { appActions } from '../../redux/features'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { userApiActions } from '../../api/userApi'
import { AxiosResponse, responseEncoding, ResponseType } from 'axios'
import TestScreenFlanApi from './api/FlanApi'
import TestScreenUserApi from './api/UserApi'
import TestScreeUtilities from './Utilities'
import TestScreenGroup from './TestScreenGroup'

const TestScreen = ({ route, navigation }: RootTabsNavigationProps) => {
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
  const [response, setResponse] = useState('')
  return (
    <View style={{ backgroundColor: colors.mainBackground, flex: 1 }}>
      <StatusBarPadding />
      <ScrollView>
        <TestScreenGroup title="API">
          <Box marginTop="s" minHeight={themeConstants.screenHeight * 0.05} maxHeight={themeConstants.screenHeight * 0.4} backgroundColor="violet" padding="s">
            <Text variant="secondary" marginTop={'s'} marginBottom={response == '' ? 'none' : 's'}>
              Response
            </Text>
            <ScrollView nestedScrollEnabled>
              {response !== undefined && (
                <Text variant="tertiary" color={'lightColor'}>
                  {(function () {
                    try {
                      const jsonRes = JSON.parse(response)
                      console.log(jsonRes.data)
                      return JSON.stringify(jsonRes.data)
                    } catch (error) {
                      console.log(error)
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