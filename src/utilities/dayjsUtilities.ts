import dayjs, { Dayjs } from 'dayjs'

const dayjsArrayToString = (dayjsArrayToConvert: Dayjs[]) => {
  const convertedArray = dayjsArrayToConvert.map((item) => dayjs(item).toString())
  return convertedArray
}

const stringArrayToDayjs = (stringArrayToConvert: string[]) => {
  const convertedArray = stringArrayToConvert.map((item) => dayjs(item))
  return convertedArray
}

export const dayjsUtilities = { dayjsArrayToString, stringArrayToDayjs }
