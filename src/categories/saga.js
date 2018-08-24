import {put, call} from 'redux-saga/effects'
import api from 'categories/api'
import actions from 'categories/reducer'

export function * getSubreddit (action) {
  yield put(actions.startCategoryFetch())
  const response = yield call(api.getSubreddis, action.subreddit)
  if (response.status === 200) {
    yield put(actions.getSubredditSuccess(response.data))
  }
  else {
    yield put(actions.failCategoryResponse(response.error))
  }
}

export function * update () {

}

export function * deleted () {

}
