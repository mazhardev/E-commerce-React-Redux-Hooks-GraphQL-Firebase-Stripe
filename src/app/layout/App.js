import React from 'react';
import './App.css';
import HomePage from '../../components/home-page/HomePage';
import { Route, Switch } from 'react-router-dom'

const Hats = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  )
}

export default App
