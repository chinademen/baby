import {get, post} from './config'

export default {
  POST (link) {
    return post(link)
  },
  GET (link) {
    return get(link)
  }
}