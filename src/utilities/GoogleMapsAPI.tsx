import axios from 'axios'

// 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&result_type=street_address&key=AIzaSyBjaM6Gy44QKIyYVgxJznJbvPtqbf1Z1Zc'
const MAPS_API_URL = 'https://maps.googleapis.com/maps/api'
const KEY = 'AIzaSyBjaM6Gy44QKIyYVgxJznJbvPtqbf1Z1Zc'

// const mapsApi = axios.create({
//   baseURL: 'https://maps.googleapis.com/maps/api',
//   //   params: {
//   //       result_type: 'street_address',
//   //       key: undefined,
//   //     latlng: undefined
//   //   }
// })

export const getReverseGeocode = async (latlng: {
  latitude: number
  longitude: number
}) => {
  const params = 'geocode/json'
  const { latitude, longitude } = latlng
  const url = `${MAPS_API_URL}/${params}?result_type=street_address&key=${KEY}&latlng=${latitude},${longitude}`
  console.log(url)
  const results = await axios
    .get(url)
    .then((response) => {
      if (response.data) {
        console.log('from inside: ', response.data.results[0].formatted_address)
        return response.data.results[0].formatted_address
      }
    })
    .catch((err) => {
      console.log('Error Happened When Fetching: ', err)
    })
  return results
  //   await axios
  //     .get(url, { method: 'get' })
  //     .then((req, res) => {
  //       res.JSON()
  //     })
  //     .then((data) => console.log(data))
  //     .catch((err) => {
  //       throw err
  //     })
}

// if (res.data) {
//   //   console.log(typeof res.data.results[0].formatted_address)
//   return res.data.results[0].formatted_address
// }
