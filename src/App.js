import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './common/Home'
import Nav from './common/Nav'

import PokeIndex from './poke/PokeIndex'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch >
        <Route exact path ="/">
          <Home />
        </Route>
        <Route path ="/pokeindex">
          <PokeIndex />
        </Route>
      </ Switch>
    </ BrowserRouter>
  )
}

export default App
