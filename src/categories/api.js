import RootApi from 'root/api'

class CategoryApi extends RootApi {
  constructor(conf) {
    super(conf)
  }
  getSubreddis(reddit) {
    this.service(`r/${reddit}.json`)
  }
}

export default new CategoryApi({baseURL: 'https://old.reddit.com/'})
