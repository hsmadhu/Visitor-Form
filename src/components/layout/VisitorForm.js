
import React, { Component } from 'react'
import FromLocal from './FromLocal';
import InputTypes from '../InputTypes'

export class VisitorForm extends Component {

    url1;

    constructor(props) {
        super(props)
    
        this.state = {name: '', email: '', file: '', tvisit: '', person: '', date: null, entrytime: '', exittime: '', id: 1 }
    }
    
    changeHandler = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })
    }
        
    dateHandler = (e) => {
        
        this.setState({
            date: e.target.value
        })
    }

    entimeHandler = (e) => {
        
        this.setState({
            entrytime: e.target.value
        })
    }

    extimeHandler = (e) => {
        this.setState({
            exittime: e.target.value
        })
    }

        
    submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem(Number(this.state.id), JSON.stringify(this.state));
        localStorage.setItem('Highestid', Number(this.state.id) + 1)
        this.setState({
            name: '',
            email: '',
            file: '',
            tvisit: '',
            person: '',
            date: '',
            entrytime: '',
            exittime: '',
            id: Number(this.state.id) + 1
        })
    }

    componentDidMount() {
        
        if (localStorage.getItem('Highestid')) {
            this.setState({
                id: localStorage.getItem('Highestid')
            })
        }
        else {
            localStorage.setItem('Highestid', 1)
        }
    }
    get_url(url) {
        this.setState({
            file: url
        })
    }
        
      
    render() {
        
        var curr = new Date()
        var date1 = curr.toISOString().substr(0, 10)
        
        return (
            <div className="container-fluid bg-info p-3">
               <form className="form-group"  onSubmit={this.submitHandler}> 
                <div className="mb-3 mt-2 w-50" style={{margin: "auto"}}>
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" value={ this.state.name } id="name" className="form-control" onChange={this.changeHandler} placeholder="Name"/>
                </div>
                <div className="mb-3 mt-2 w-50" style={{margin: "auto"}}>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" id="email" value={ this.state.email } onChange={this.changeHandler} className="form-control" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 w-50" style={{margin: "auto"}}>
                    <label htmlFor="file" className="form-label">Upload Selfie</label>
                    <InputTypes she={this.get_url.bind(this)} />
                </div>
                <select className="w-50 mb-3 form-select" style={{margin: "auto"}} value={ this.state.tvisit } id="tvisit" aria-label="Default select example" onChange={this.changeHandler} >
                    <option>Type of Visit</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Personal">Personal</option>
                </select>
                <div className="mb-3 mt-2 w-50" style={{margin: "auto"}}>
                    <label htmlFor="person" className="form-label">Person to Visit</label>
                    <input type="text" id="person" value={ this.state.person } onChange={this.changeHandler} className="form-control"  placeholder="Person"/>
                </div>
                <div className="mb-3 mt-2 w-50" style={{margin: "auto"}}>    
                    <label htmlFor="date" className="form-label">Date of Visit</label>    
                    <input type="date" id="date" onChange={this.dateHandler} 
                     min={date1} max={date1} className="form-control" />
                </div>
                <div className="mb-3 mt-2 w-50" style={{margin: "auto"}}>    
                    <label htmlFor="entrytimedp" className="form-label">Entry Time</label>    
                    <input id="entrytimedp" type="time" onChange={this.entimeHandler } className="form-control" />
                </div>
                <div className="mb-3 mt-2 w-50" style={{margin: "auto"}}>    
                    <label htmlFor="exittimedp" className="form-label">Exit Time</label>    
                    <input id="exittimedp" type="time" onChange={this.extimeHandler} className="form-control" />
                </div>    
                <div className="d-flex">
                        <button type="submit" className="btn btn-primary mb-3 ms-auto">Submit</button>
                </div>        
                </form>
                
                <FromLocal />  
            </div>
        )
    }
}

export default VisitorForm
