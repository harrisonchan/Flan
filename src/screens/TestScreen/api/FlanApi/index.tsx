import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { flanApiActions } from '../../../../api'
import TestScreenGroup from '../../TestScreenGroup'
import TestScreenItem from '../../TestScreenItem'

interface TestScreenFlanApiProps {
  onResponse: (res: any) => void
}

const TestScreenFlanApi: React.FC<TestScreenFlanApiProps> = (props) => {
  const [response, setResponse] = useState('')
  useEffect(() => {
    if (response !== '') {
      props.onResponse(response)
    }
  }, [response])
  return (
    <TestScreenGroup title="Flan">
      <TestScreenItem
        label="Add New Flan"
        onPress={() => {
          flanApiActions
            .addNewFlan({
              id: 'asdfasdf',
              title: 'Go to the zoo',
              description: 'Go to the zoo to participate in really fun activities and events!',
              activities: undefined,
              illustration: 1,
              location: {
                address: 'No. 45, City Hall Rd, Xinyi District, Taipei City, Taiwan 110',
                coordinate: {
                  latitude: 25.03405448948375,
                  longitude: 121.5639284989046,
                },
              },
              peopleAttending: [],
              polls: undefined,
            })
            .then((response) => {
              setResponse(response)
            })
            .catch((error) => {
              console.error(error)
            })
        }}
      />
      <TestScreenItem
        label="Get Flan By ID"
        onPress={() => {
          flanApiActions
            .getFlanById('6353e48943ab4af8de7648ea')
            .then((response) => {
              console.log(response?.data)
            })
            .catch((err) => console.error(err))
        }}
      />
    </TestScreenGroup>
  )
}

export default TestScreenFlanApi
