import {create} from 'apisauce'

class Api {
  constructor(config) {
    this.service = create({
      baseURL: config.baseURL,
      headers: config.headers
    })
  }
}

export default Api
