import React from 'react'
import ReactDOM from 'react-dom'
import {Root} from 'root/containers'
import configureStore from 'root/store'
import 'root/styles/global-styles'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
