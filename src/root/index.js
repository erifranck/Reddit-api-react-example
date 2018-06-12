import React from 'react'
import ReactDOM from 'react-dom'
import {Root} from 'root/containers'
import configureStore from 'root/store'
import theme from 'root/styles/theme'
import 'root/styles/global-styles'

const store = configureStore()

ReactDOM.render(<Root store={store} theme={theme} />, document.getElementById('root'))
