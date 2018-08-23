import {combineReducers} from 'redux'
import {reducer as auth} from 'auth/reducer'
import {reducer as categories} from 'categories/reducer'

export default combineReducers({
  auth,
  categories
})
