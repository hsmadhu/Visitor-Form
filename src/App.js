import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'

// import Home from './components/layout/Home'
import News from './components/layout/News'
import VisitorForm from './components/layout/VisitorForm'
import FormikExample from './components/FormikExample';

import InputTypes from './components/InputTypes';



function App() {
  return (
    <BrowserRouter>
      <Header />
        
          <Route exact path="/" component={ FormikExample } />
          <Route path="/visitor" component={ VisitorForm }/>
          <Route path="/latestnews" component={News} />
          <Route path="/inputtypes" component={ InputTypes }/>
              
    </BrowserRouter>
  )
}

export default App;
