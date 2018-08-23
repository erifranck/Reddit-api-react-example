import {takeLatest} from 'redux-saga/effects'
import {
  getSubreddit
} from 'categories/saga'

import {
  types
} from 'categories/reducer'

function * saga() {
  yield takeLatest(types.GET_SUBREDDIT, getSubreddit)
}

export default saga
