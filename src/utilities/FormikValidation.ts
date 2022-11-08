import * as Yup from 'yup'

// User Auth
export const username = Yup.string().required('Username is required')
export const email = Yup.string().email('Email is invalid').required('Email is required')
export const password = Yup.string().required('Password is required')
export const firstName = Yup.string().required('First Name is required')
export const lastName = Yup.string().required('Last Name is required')
export const birthday = Yup.date()
export const gender = Yup.string()

export const signupInitialValidationSchema = Yup.object().shape({
  username,
  email,
  password,
})

export const signupDetailsValidationSchema = Yup.object().shape({
  firstName,
  lastName,
  birthday,
  gender,
})

export const loginValidationSchema = Yup.object().shape({
  email,
  password,
})

export const searchValidationSchema = Yup.object().shape({
  searchValue: Yup.string().required('Search field is required'),
})

export const addNewOriginalValidationSchema = Yup.object().shape({
  title: Yup.string().required('Flan name is required'),
  description: Yup.string().required('Flan description is required'),
})
