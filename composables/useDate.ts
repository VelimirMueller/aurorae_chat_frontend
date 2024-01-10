import dayJs from 'dayjs'
import type { DateEnum, Dayjs } from '~/types'

export const useDate = (format: DateEnum): string => {
  const now: Dayjs = dayJs()

  return now.format(format)
}
