import RootApi from 'root/api'

const Api = new RootApi({baseURL: 'https://old.reddit.com/'})
class CategoryApi extends Api {
  getSubreddis(reddit) {
    this.service(`r/${reddit}.json`)
  }

}
