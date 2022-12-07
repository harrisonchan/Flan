import Axios from 'axios'
import { FlanType } from '../redux/features/flanSlice'

const flanApi = Axios.create({
  baseURL: 'http://localhost:3333/api/flan',
})

const addNewFlan = async (flan: FlanType) => {
  try {
    const { title, description, author, illustration, location, activities, polls } = flan
    const response = await flanApi.post('/', {
      title,
      description,
      author,
      illustration,
      location,
      activities,
      polls,
    })
    console.log(response)
    try {
      return response
    } catch (error) {
      console.error(error)
    }
  } catch (error) {
    console.error(error)
  }
}

const getFlanById = async (flanId: string) => {
  try {
    console.log('inside app - trying to find flan by id: ', flanId)
    const response = await flanApi.post(`/${flanId}`)
    // console.log(response)
    console.log('res from inside api', response.data)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const flanApiActions = {
  addNewFlan,
  getFlanById,
}

export default flanApi
