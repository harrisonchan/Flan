import Axios from 'axios'
export * from './flanApi'
export * from './userApi'

// export const userApi = Axios.create({
//   baseURL: 'http://http://localhost:3333/api/account',
// })

export const test = Axios.create({
  baseURL: 'http://localhost:3333/api/test',
})

export const checkServer = async () => {
  try {
    const response = await test.get('')
    if (response.data) {
      console.log(response.data)
    }
  } catch (error) {
    console.error(error)
  }
}
