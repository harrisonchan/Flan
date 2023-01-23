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
  author: UserTypeShort
  illustration: illustrationType
  peopleAttending: UserTypeShort[]
  location: LocationType
  date: string //dayjs().toString()
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
  date: string //dayjs().toString()
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
export type UserTypeShort = Omit<UserType, 'createdFlans' | 'savedFlans' | 'attendedFlans'>
