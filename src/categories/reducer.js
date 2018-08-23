import {createActions, createReducer} from 'reduxsauce'

const {Types, Creators} = createActions({
  getSubreddit: ['subreddit'],
  getSubredditSuccess: ['response'],
  failCategoryResponse: ['response']
})

export const types = Types
export default Creators

const INITIAL_VALUES = {
  logged: false,
  subreddit: null
}

const setSubreddit = (state, action) => ({
  ...state,
  subreddits: 'done'
})

const failResponse = (state, action) => ({
  ...state,
  err: action.err
})

const HANDLERS = {
  [Types.GET_SUBREDDIT_SUCCESS]: setSubreddit,
  [Types.FAIL_CATEGORY_RESPONSE]: failResponse
}

export const reducer = createReducer(INITIAL_VALUES, HANDLERS)
