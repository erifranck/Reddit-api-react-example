import {takeLatest} from 'redux-saga/effects'
import {
  get as getCategories
} from 'categories/saga'
import {
  types
} from 'categories/reducer'

function * saga() {
  yield takeLatest(types.GET_CATEGORIES, getCategories)
}

export default saga
