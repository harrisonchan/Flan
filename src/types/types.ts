import { illustrationType } from '@components'
import dayjs from 'dayjs'
import { LatLng } from 'react-native-maps'

export type ImageType = {
  uri: string
}

/* Flans */
export type ActivityType = {
  id: string
  title: string
  description: string
  date: string //dayjs().toString()
  subActivities?: ActivityType[]
}
export type FlanType = {
  id: string
  title: string
  description: string
  authorId: string
  illustration: illustrationType
  peopleAttending: { username: string; userFirstName: string; userLastName: string }[]
  location: LocationType
  activities: ActivityType[]
  polls: PollType[]
  chatId: string
}
export type LocationType = { address: string; coordinate: LatLng | undefined }
export type PollType = {
  id: string
  authorId: string
  title: string
  description: string
  datePosted: string //dayjs().toString()
  options: PollOptionType[]
  chatId: string
}
export type PollOptionType = {
  id: string
  title: string
  voteAmount: number
  image?: ImageType
}

/* User */
export type UserType = {
  id: string
  username: string
  firstName: string
  lastName: string
  createdFlans: FlanType[]
  savedFlans: FlanType[]
  attendedFlans: FlanType[]
}
