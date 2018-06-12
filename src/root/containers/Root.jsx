import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {ThemeProvider} from 'styled-components'

// custom import
import routes from 'root/routes'

export const Root = ({store, theme = { }}) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        { renderRoutes(routes) }
      </HashRouter>
    </ThemeProvider>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object,
  theme: PropTypes.object
}
