import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../reduxComponents'
import { appActions } from '../../../reduxComponents/features'
import TestScreenGroup from '../TestScreenGroup'
import TestScreenItem from '../TestScreenItem'

const TestScreeUtilities = () => {
  const colorScheme = useAppSelector((state) => state.utilityReducer.colorScheme)
  const dispatch = useDispatch()
  return (
    <TestScreenGroup title="App Utils">
      <TestScreenItem
        label="Toggle Light/Dark Mode"
        onPress={() => {
          colorScheme == 'dark' ? dispatch(appActions.utilityActions.setColorScheme('light')) : dispatch(appActions.utilityActions.setColorScheme('dark'))
        }}
      />
    </TestScreenGroup>
  )
}

export default TestScreeUtilities
