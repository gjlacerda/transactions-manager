
import React from 'react'
import store from 'state/store'
import { Provider } from 'react-redux'

export default ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)
