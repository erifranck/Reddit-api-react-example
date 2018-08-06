import {createActions, createReducer} from 'reduxsauce'

const {Types, Creators} = createActions({
  getCategories: null,
  getCategoriesSuccess: ['response'],
  getCategoriesFail: ['response']
})

export const types = Types
export default Creators

const INITIAL_VALUES = {
  token: '',
  logged: false
}

const setCategories = (state, action) => ({
  ...state,
  data: action.response.data
})

const HANDLERS = {
  [Types.GET_CATEGORIES_SUCCESS]: setCategories
}

export const reducer = createReducer(INITIAL_VALUES, HANDLERS)
