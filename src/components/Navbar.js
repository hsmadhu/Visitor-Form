import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Home from './components/layout/Home'
import News from './components/layout/News'
import Contact from './components/layout/Contact'
import VisitorForm from './layout/VisitorForm'


export class Navbar extends Component {
    render() {
        return (
            <BrowserRouter>
                <Home />
                <News />
                <VisitorForm />
                
            </BrowserRouter>
        )
    }
}

export default Navbar
