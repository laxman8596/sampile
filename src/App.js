import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Componetnts/Home'
import Navbar from './Componetnts/Navbar'
import Search from './Componetnts/Search'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/search/:imgname' exact component={Search} />
      </Switch>
      
      </BrowserRouter>
    </div>
  )
}

export default App