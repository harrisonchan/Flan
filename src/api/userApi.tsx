import { UserApiType } from '@types'
import Axios from 'axios'

const userApi = Axios.create({
  baseURL: 'http://localhost:3333/api/account',
})

const registerUser = async (user: UserApiType) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      username,
      birthday,
      accountType,
      gender,
      // phone
    } = user
    const response = await userApi.post('/register', {
      email,
      password,
      firstName,
      username,
      lastName,
      birthday,
      accountType,
      gender,
      // phone,
    })
    return response
  } catch (error) {
    console.error(error)
  }
}

const loginUser = async (user: { email: string; password: string }) => {
  try {
    const { email, password } = user
    console.log(email)
    console.log(password)
    const response = await userApi.post('/', {
      email,
      password,
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const userApiActions = {
  registerUser,
  loginUser,
}
export default userApi
