import { useFormik } from 'formik'
import { toInteger } from 'lodash'
import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { flanApiActions } from '../../../../api'
import { Text } from '../../../../components'
import { addNewFlanValidationSchema, testScreenAddNewFlanValidationSchema } from '../../../../utilities'
import TestScreenGroup from '../../TestScreenGroup'
import TestScreenItem from '../../TestScreenItem'

interface TestScreenFlanApiProps {
  onResponse: (res: any) => void
}

const TestScreenFlanApi: React.FC<TestScreenFlanApiProps> = (props) => {
  const [response, setResponse] = useState<any>('')
  const [illustrationInput, setIllustrationInput] = useState<any>('')
  const [locationLatitudeInput, setLocationLatitudeInput] = useState<any>('')
  const [locationLongitudeInput, setLocationLongitudeInput] = useState<any>('')
  const [getFlanByIdInput, setGetFlanByIdInput] = useState('')
  useEffect(() => {
    if (response !== '') {
      props.onResponse(response)
    }
  }, [response])
  const flanFormik = useFormik({
    initialValues: {
      // id: '',
      title: '',
      description: '',
      author: '',
      illustration: 0,
      locationAddress: '',
      locationLatitude: 0,
      locationLongitude: 0,
      activities: [],
      polls: [],
    },
    validationSchema: testScreenAddNewFlanValidationSchema,
    onSubmit: () => addNewFlan(),
  })
  const addNewFlan = async () => {
    console.log('Test Screen Trying To Add New Flan...')
    let {
      // id,
      title,
      description,
      author,
      illustration,
      locationAddress,
      locationLatitude,
      locationLongitude,
      activities,
      polls,
    } = flanFormik.values
    const location = {
      address: locationAddress,
      coordinate: {
        latitude: locationLatitude,
        longitude: locationLongitude,
      },
    }
    const flan = {
      // id,
      title,
      description,
      author,
      illustration,
      location,
      activities,
      polls,
    }
    console.log(flan)
    flanApiActions
      .addNewFlan(flan)
      .then((response) => {
        setResponse(response)
      })
      .catch((error) => console.error(error))
  }
  // useEffect(() => {
  //   if (illustrationInput == '') {
  //     flanFormik.errors['illustration'] = 'illustration is required'
  //   } else {
  //     flanFormik.errors.illustration && delete flanFormik.errors.illustration
  //   }
  //   if (locationLatitudeInput == '') {
  //     flanFormik.errors['locationLatitude'] = 'locationLatitude is required'
  //   } else {
  //     flanFormik.errors.locationLatitude && delete flanFormik.errors.locationLatitude
  //   }
  //   if (locationLongitudeInput == '') {
  //     flanFormik.errors['locationLongitude'] = 'locationLongitude is required'
  //   } else {
  //     flanFormik.errors.locationLongitude && delete flanFormik.errors.locationLongitude
  //   }
  // }, [flanFormik.errors])
  return (
    <TestScreenGroup title="Flan">
      <Text variant="tertiary" color="red">
        {JSON.stringify(flanFormik.errors)}
      </Text>
      {/* <TextInput
        placeholder="flan id"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        onChangeText={flanFormik.handleChange('id')}
      /> */}
      <TextInput
        placeholder="title"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        onChangeText={flanFormik.handleChange('title')}
      />
      <TextInput
        placeholder="description"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        onChangeText={flanFormik.handleChange('description')}
      />
      <TextInput
        placeholder="author (should use author's userId?)"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        onChangeText={flanFormik.handleChange('author')}
      />
      <TextInput
        placeholder="illustration (numbers only)"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        keyboardType="number-pad"
        value={illustrationInput}
        onChangeText={(input) => {
          let sanitizedInput: string | number = input.replace(/\D/g, '')
          sanitizedInput = parseInt(sanitizedInput)
          setIllustrationInput(sanitizedInput)
          console.log(input)
          console.log('sanitized: ', sanitizedInput)
          console.log('illustrationInput: ', illustrationInput)
          flanFormik.handleChange('illustration')
        }}
      />
      <TextInput
        placeholder="locationAddress"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        onChangeText={flanFormik.handleChange('locationAddress')}
      />
      <TextInput
        placeholder="locationLatitude (floats only)"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        keyboardType="numeric"
        value={locationLatitudeInput}
        onChangeText={(input) => {
          let sanitizedInput: string | number = input.replace(/\D\./g, '')
          sanitizedInput = parseFloat(sanitizedInput)
          setLocationLatitudeInput(sanitizedInput)
          console.log(input)
          console.log('sanitized: ', sanitizedInput)
          flanFormik.handleChange('locationLatitude')
        }}
      />
      <TextInput
        placeholder="locationLongitude (floats only)"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        value={locationLongitudeInput}
        onChangeText={(input) => {
          let sanitizedInput: string | number = input.replace(/\D\./g, '')
          sanitizedInput = parseFloat(sanitizedInput)
          setLocationLongitudeInput(sanitizedInput)
          flanFormik.handleChange('locationLongitude')
        }}
      />
      <TextInput
        placeholder="activities (broken, dont fill)"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        onChangeText={flanFormik.handleChange('activities')}
      />
      <TextInput
        placeholder="polls (broken, dont fill)"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        autoCapitalize="none"
        onChangeText={flanFormik.handleChange('polls')}
      />
      <TestScreenItem
        label="Add New Flan"
        onPress={() => {
          // flanApiActions
          //   .addNewFlan({
          //     // id: 'asdfasdf',
          //     title: 'Hello world!',
          //     description: 'Hello World!',
          //     activities: undefined,
          //     illustration: 1,
          //     location: {
          //       address: 'No. 45, City Hall Rd, Xinyi District, Taipei City, Taiwan 110',
          //       coordinate: {
          //         latitude: 25.03405448948375,
          //         longitude: 121.5639284989046,
          //       },
          //     },
          //     peopleAttending: [],
          //     polls: undefined,
          //   })
          //   .then((response) => {
          //     setResponse(response)
          //   })
          //   .catch((error) => {
          //     console.error(error)
          //   })
          flanFormik.submitForm()
        }}
      />
      <TextInput
        placeholder="flan id"
        style={{ backgroundColor: 'white', padding: 10, marginTop: 5 }}
        value={getFlanByIdInput}
        autoCapitalize="none"
        onChangeText={(input) => setGetFlanByIdInput(input)}
      />
      <TestScreenItem
        label="Get Flan By ID"
        onPress={() => {
          if (getFlanByIdInput === '') {
            setResponse('Enter a flan id')
            console.error('Enter a flan id')
          } else {
            flanApiActions
              .getFlanById(getFlanByIdInput)
              .then((response) => {
                setResponse(response)
              })
              .catch((err) => console.error(err))
          }
        }}
      />
    </TestScreenGroup>
  )
}

export default TestScreenFlanApi
