import { useTheme } from '@shopify/restyle'
import { useFormik } from 'formik'
import { isString } from 'lodash'
import React from 'react'
import { Keyboard, Pressable } from 'react-native'
import { Box, Button, NavigationHeader, SearchBar, StatusBarPadding, Text } from '../../components'
import { Theme } from '../../theme'
import { SearchStackNavigationProps } from '../../types'
import { searchValidationSchema } from '../../utilities'

const SearchScreen = ({ route, navigation }: SearchStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const formik = useFormik({
    initialValues: {
      searchValue: '',
    },
    validationSchema: searchValidationSchema,
    onSubmit: () => navigation.navigate('SearchResultsScreen'),
  })
  return (
    <>
      <StatusBarPadding />
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <Box width={themeConstants.containerWidth} alignSelf="center">
          <NavigationHeader
            rightIconProps={{ name: 'close', size: themeConstants.headerIconSize, color: colors.darkColor }}
            rightIconOnPress={() => navigation.pop()}
            style={{ marginBottom: spacing.m }}
          />
          <>
            <SearchBar
              textInputProps={{
                onChangeText: formik.handleChange('searchValue'),
                onBlur: formik.handleBlur('searchValue'),
                useValidation: {
                  isValid: !isString(formik.errors.searchValue),
                  showValidationIcon: false,
                  invalidInputMessage: formik.touched.searchValue ? formik.errors.searchValue : undefined,
                },
              }}
            />
            <Button label="Search" onPress={() => formik.submitForm()} />
          </>
        </Box>
      </Pressable>
    </>
  )
}

export default SearchScreen
