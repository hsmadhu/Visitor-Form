import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'

// import Home from './components/layout/Home'
import News from './components/layout/News'
import VisitorForm from './components/layout/VisitorForm'
import FormikExample from './components/FormikExample';



function App() {
  return (
    <BrowserRouter>
      <Header />
        
          <Route exact path="/" component={ FormikExample } />
          <Route path="/visitor" component={ VisitorForm }/>
          <Route path="/latestnews" component={ News }/>
              
    </BrowserRouter>
  )
}

export default App;
