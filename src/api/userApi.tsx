import Axios from 'axios'
import { databaseUserType, userType } from '../types'

const userApi = Axios.create({
  baseURL: 'http://localhost:3333/api/account',
})
const parseUser = (user: databaseUserType) => {
  const { gov_id, date_created, last_login, ...parsedUser } = user
  const govId = user.gov_id
  const dateCreated = user.date_created
  const lastLogin = user.last_login
  return { govId, dateCreated, lastLogin, ...parsedUser }
}
const registerUser = async (user: userType) => {
  const { email, password, name, birthday, type, gender, phone } = user
  const gov_id = user.govId
  const response = await userApi.post('/register', {
    email,
    password,
    name,
    gov_id,
    birthday,
    type,
    gender,
    phone,
  })
  if (response.data.status === 'success') {
    return { status: 'success', user: parseUser(response.data.user) }
  } else {
    return { status: 'error', error: response.data.error }
  }
}
const loginUser = async (user: { email: string; password: string }) => {
  const { email, password } = user
  const response = await userApi.post('/', { email, password })
  if (response.data.status === 'success') {
    console.log(response.data.user)
    return { status: 'success', user: parseUser(response.data.user) }
  } else {
    return { status: 'error', error: response.data.error }
  }
}
const getUserFavorites = async (userId: number) => {
  const response = await userApi.get(`/userid=${userId}/favorites`)
  if (response.data.status === 'success') {
    const favoriteProjectsIds: number[] = []
    response.data.projects.map((project: { project_id: number }) => {
      favoriteProjectsIds.push(project.project_id)
    })
    return { status: 'success', favoriteProjectsIds }
  } else {
    return { status: 'error', error: response.data.error }
  }
}
const updateUser = async (user: {
  userId: number
  email: string
  name: string
  gender: number
  govId: string
  phone: string
  birthday: Date
}) => {
  const { userId, email, name, gender, govId, phone, birthday } = user
  const response = await userApi.post(`/update/userid=${userId}`, {
    email,
    name,
    gender,
    gov_id: govId,
    phone,
    birthday,
  })
  if (response.data.status === 'success') {
    return { status: 'success', user: parseUser(response.data.user) }
  } else {
    return { status: 'error', error: response.data.error }
  }
}
const favoriteProject = async (projectId: number, userId: number) => {
  const response = await userApi.post(`/favorite-project/projectid=${projectId}`, { user_id: userId })
  if (response.data.status === 'success') {
    return { status: 'success', projectId }
  } else {
    return { status: 'error', error: response.data.error }
  }
}
const unfavoriteProject = async (projectId: number, userId: number) => {
  const response = await userApi.post(`/unfavorite-project/projectid=${projectId}`, { user_id: userId })
  if (response.data.status === 'success') {
    return { status: 'success', projectId }
  } else {
    return { status: 'error', error: response.data.error }
  }
}
export const userApiActions = {
  parseUser,
  registerUser,
  loginUser,
  getUserFavorites,
  updateUser,
  favoriteProject,
  unfavoriteProject,
}
export default userApi
