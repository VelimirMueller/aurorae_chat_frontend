import dayJs from 'dayjs'
import { DateEnum } from '~/types'

export const useDate = (format: DateEnum): string => {
  return dayJs().format(format)
}
