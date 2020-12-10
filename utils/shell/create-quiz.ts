const cryptoRandomString = require('crypto-random-string')

export const generateSlug = (): string => {
  return cryptoRandomString({ length: 20, type: 'hex' })
}
