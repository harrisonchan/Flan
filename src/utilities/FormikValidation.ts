import * as Yup from 'yup'

export const signupValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export const searchValidationSchema = Yup.object().shape({
  searchValue: Yup.string().required('Search field is required'),
})

export const addNewOriginalValidationSchema = Yup.object().shape({
  title: Yup.string().required('Flan name is required'),
  description: Yup.string().required('Flan description is required'),
})
