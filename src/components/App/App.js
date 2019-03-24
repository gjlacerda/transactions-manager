import React from 'react'
import Provider from 'components/Provider'
import Layout from 'components/Layout'
import Routes from 'components/Routes'

export default () => (
  <Provider>
    <Layout>
      <Routes />
    </Layout>
  </Provider>
)
