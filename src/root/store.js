import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'root/reducer'
import rootSaga from 'root/saga'

const sagamiddleware = createSagaMiddleware()
const middleware = [sagamiddleware]

const configureStore = preloadedState => {
  const compose = composeWithDevTools(applyMiddleware(...middleware))
  const store = createStore(rootReducer, preloadedState, compose)

  sagamiddleware.run(rootSaga)
  return store
}

export default configureStore
