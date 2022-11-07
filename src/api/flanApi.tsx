import Axios from 'axios'
import { FlanType } from '../redux/features/flanSlice'

const flanApi = Axios.create({
  baseURL: 'http://localhost:3333/api/flan',
})

const addNewFlan = async (flan: FlanType) => {
  try {
    const { title, description, illustration, location, activities, polls } =
      flan
    const response = await flanApi.post('/', {
      title,
      description,
      illustration,
      location,
      activities,
      polls,
    })
    console.log(response)
    try {
      return JSON.stringify(response)
    } catch (error) {
      console.error(error)
    }
  } catch (error) {
    console.error(error)
  }
}

const getFlanById = async (flanId: string) => {
  try {
    const response = await flanApi.get('/', {
      params: { id: flanId },
    })
    // console.log(response)
    // console.log(response.data)
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
