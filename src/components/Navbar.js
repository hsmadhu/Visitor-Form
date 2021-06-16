import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
// import Home from './components/layout/Home'
import News from './components/layout/News'
import FormikExample from './FormikExample'
import VisitorForm from './layout/VisitorForm'
import InputTypes from './InputTypes'


export class Navbar extends Component {
    render() {
        return (
            <BrowserRouter>
                <FormikExample />
                <News />
                <VisitorForm />
                <InputTypes />
            </BrowserRouter>
        )
    }
}

export default Navbar
