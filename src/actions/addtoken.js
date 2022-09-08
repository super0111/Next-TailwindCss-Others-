import { ADDTOKEN } from './types'

export const addtoken = name => {
    return {
      type: ADDTOKEN,
      payload: name
    }
 }