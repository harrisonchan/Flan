import dayjs from 'dayjs'

export type Person = {
  id: string
  name: string
  avatar: string
}

export type Message = {
  message: string
  date: dayjs.Dayjs
  sender: Person
}
