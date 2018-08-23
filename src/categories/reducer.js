import {createActions, createReducer} from 'reduxsauce'

const {Types, Creators} = createActions({
  getSubreddit: ['subreddit'],
  startCategoryFetch: ['value'],
  getSubredditSuccess: ['response'],
  failCategoryResponse: ['response']
})

export const types = Types
export default Creators

const INITIAL_VALUES = {
  error: null,
  fetching: false,
  subreddit: null
}

const initFetch = (state, action) => ({
  ...state,
  fetching: true
})

const setSubreddit = (state, action) => ({
  ...state,
  subreddits: action.response,
  fetching: false
})

const failResponse = (state, action) => ({
  ...state,
  fetching: false,
  err: action.err
})

const HANDLERS = {
  [Types.START_CATEGORY_FETCH]: initFetch,
  [Types.GET_SUBREDDIT_SUCCESS]: setSubreddit,
  [Types.FAIL_CATEGORY_RESPONSE]: failResponse
}

export const reducer = createReducer(INITIAL_VALUES, HANDLERS)
