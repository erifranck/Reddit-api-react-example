import {App} from 'main/containers'
import {Home} from 'main/styles'
import {connect} from 'react-redux'
import actions from 'categories/reducer'

export const AppPage = App
export const HomePage = connect(
  (state) => ( {
    subreddits: state.categories.subreddits
  }),
  {
    getSubreddit: actions.getSubreddit
  }
)(Home)
