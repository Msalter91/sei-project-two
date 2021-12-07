import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './common/Home'
import Nav from './common/Nav'

import PokeIndex from './poke/PokeIndex'
import PokeShow from './poke/PokeShow'


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
        <Route path ="/pokemon/:pokemonid">
          <PokeShow />
        </Route>
      </ Switch>
    </ BrowserRouter>
  )
}

export default App
