import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Transaction from 'pages/Transaction'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/transaction" component={Transaction} />
    </Switch>
  </BrowserRouter>
)
