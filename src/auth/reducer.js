import {createActions, createReducer} from 'reduxsauce'

const {Types, Creators} = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['username'],
  loginFailure: ['error'],
  requestWithDefaultValues: { username: 'guest', password: null },
  logout: null
  // you can create custom actioncreator like this
  //custom: (a, b) => ({ type: 'CUSTOM', total: a + b })
})

export const types = Types
export default Creators

const INITIAL_VALUES = {
  token: '',
  logged: false
}

const setAuthValues = (state, action) => ({
  ...state,
  token: action.response.token
})

const HANDLERS = {
  [Types.LOGIN_SUCCESS]: setAuthValues
}

export const reducer = createReducer(INITIAL_VALUES, HANDLERS)
