import { addDays } from 'date-fns'

export const COOKIE_OPTION = {
  path: '/',
  expires: addDays(new Date(), 7),
  maxAge:   86400 * 7,
}
