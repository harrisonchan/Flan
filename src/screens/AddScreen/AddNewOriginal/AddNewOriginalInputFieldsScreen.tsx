import React, { useEffect, useState } from 'react'
import { Box, Button, StatusBarPadding, Text, TextInput } from '../../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../../theme'
import { AddStackNavigationProps } from '../../../types'
import NavigationHeader from '../../../components/NavigationHeader'
import { ActivityType, LocationType } from '../../../redux/features/userSlice'
import { useFormik } from 'formik'
import { addNewOriginalValidationSchema } from '../../../utilities'
import { isString } from 'lodash'

const AddNewOriginalInputFieldsScreen = ({ route, navigation }: AddStackNavigationProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState<LocationType | undefined>(undefined)
  const [activities, setActivities] = useState<ActivityType[] | undefined>(undefined)

  useEffect(() => {
    if (route.params) {
      if (route.params.location) {
        setLocation(route.params.location)
      }
    }
  }, [route])

  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const formik = useFormik({
    initialValues: {
      id: (Math.random() * 100 * Math.PI).toString(),
      title: '',
      description: '',
      location: { address: '', coordinate: { latitude: 0, longitude: 0 } },
    },
    validationSchema: addNewOriginalValidationSchema,
    onSubmit: (values) => navigation.navigate('AddNewOriginalPickIllustrationScreen', { ...values }),
  })
  useEffect(() => {
    if (route.params?.location) {
      console.log(route.params.location)
      formik.setFieldValue('location', route.params.location).then(() => {
        console.log(formik.values)
      })
    }
  }, [route])
  return (
    <>
      <StatusBarPadding />
      <Box flex={1} backgroundColor="mainBackground">
        <Box width={themeConstants.containerWidth} alignSelf="center" flex={1}>
          <NavigationHeader
            leftIconProps={{ name: 'chevron-back', size: themeConstants.headerIconSize, color: colors.darkColor }}
            leftIconOnPress={() => navigation.goBack()}
          />
          <ScrollView>
            <Text>Create Your Own Flan</Text>
            <TextInput
              placeholder="Name Your Flan!"
              label="Flan Name"
              labelColor={colors.primaryColor}
              onChangeText={formik.handleChange('title')}
              onBlur={formik.handleBlur('title')}
              containerStyle={{ marginBottom: spacing.l }}
              useValidation={{
                isValid: !isString(formik.errors.title),
                showValidationIcon: formik.touched.title,
                invalidInputMessage: formik.touched.title ? formik.errors.title : undefined,
              }}
            />
            <TextInput
              placeholder="Describe Your Flan!"
              label="Flan Description"
              labelColor={colors.primaryColor}
              onChangeText={formik.handleChange('description')}
              onBlur={formik.handleBlur('description')}
              containerStyle={{ marginBottom: spacing.l }}
              useValidation={{
                isValid: !isString(formik.errors.description),
                showValidationIcon: formik.touched.description,
                invalidInputMessage: formik.touched.description ? formik.errors.description : undefined,
              }}
            />
            <Text variant="secondary" color="primaryColor">
              Add A Location
            </Text>
            {/* <Text variant="secondary">Location skipped for now...</Text> */}
            <Text variant="secondary">
              {formik.values.location.address ? formik.values.location.address : 'No Location Added...'}
            </Text>
            <Box flexDirection="row">
              <Button
                label={formik.values.location.address ? 'Modify Location' : 'Add Location'}
                mode="small"
                onPress={() => navigation.navigate('AddNewSelectLocationScreen')}
                style={{ backgroundColor: colors.lightGreen }}
              />
            </Box>
            <Text variant="secondary" color="primaryColor">
              Add Activities
            </Text>
            <Text variant="secondary">Adding activities skipped for now...</Text>
            <Button label="Skip" mode="small" onPress={() => setActivities(undefined)} />
            <Button label="Pick An Illustration" onPress={() => formik.submitForm()} />
          </ScrollView>
        </Box>
      </Box>
    </>
  )
}

export default AddNewOriginalInputFieldsScreen
