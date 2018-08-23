import {put, select, call} from 'redux-saga/effects'
import api from 'categories/api'
import actions from 'categories/reducer'

export function * getSubreddit(action) {
  yield put(actions.getSubreddit(action.subreddit))

}

export function * update() {

}

export function * deleted() {

}
