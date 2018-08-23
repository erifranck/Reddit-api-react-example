import RootApi from 'root/api'

class CategoryApi extends RootApi {
  constructor(conf) {
    super(conf)
    this.getSubreddis = this.getSubreddis.bind(this)
  }
  getSubreddis(reddit) {
    return this.service.get(`r/${reddit}.json`)
  }
}

export default new CategoryApi({baseURL: 'https://old.reddit.com/'})
