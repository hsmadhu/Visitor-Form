
import React, { Component } from 'react'

export class VisitorForm extends Component {

    
    visitorData = {};

    constructor(props) {
        super(props)
    
        this.state = {name: '', email: '', file: '', tvisit: '', person: '', date: '', entrytime: '', exittime: '', id: 0 }
    }
    
    changeHandler = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    

    submitHandler = (e) => {
        e.preventDefault()
        console.log("submitted", this.state)
        localStorage.setItem('HighestId', this.state.id + 1)
        if (this.visitorData) {
            this.setState({
                name: this.visitorData.name,
                email: this.visitorData.email,
                file: this.visitorData.file,
                tvisit: this.visitorData.tvisit,
                person: this.visitorData.person,
                date: this.visitorData.date,
                entrytime: this.visitorData.entrytime,
                exittime: this.visitorData.exittime,
            })
        }
        else this.visitorData = {}

        this.setState({
            name: '',
            email: '',
            file: '',
            tvisit: '',
            person: '',
            date: '',
            entrytime: '',
            exittime: '',
            id: this.state.id+1
        })
    }

    componentDidMount() {
            }

    
    componentDidUpdate(nextProps, nextState) {
        localStorage.setItem(this.state.id.toString(), JSON.stringify(nextState));

        this.visitorData = JSON.parse(localStorage.getItem('0'))
        console.log(this.visitorData.name)
                
    }

    render() {
        var curr = new Date();
        var date1 = curr.toISOString().substr(0, 10);
        var viData = JSON.parse(localStorage.getItem('1'))
        var Hid = JSON.parse(localStorage.getItem('HighestId'))
        
        return (
            <div className="container">
               <form className="form-group" onSubmit={this.submitHandler}> 
                <div className="mb-3 mt-2 w-50">
                    <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" value={ this.state.name } id="name" className="form-control" onChange={this.changeHandler} placeholder="Name"/>
                </div>
                <div className="mb-3 mt-2 w-50">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" id="email" value={ this.state.email } onChange={this.changeHandler} className="form-control" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 w-50">
                    <label htmlFor="file" className="form-label">Upload Selfie</label>
                    <input className="form-control" value={ this.state.file } id="file" onChange={this.changeHandler} type="file" />
                </div>
                <select className="w-50 mb-3 form-select" value={ this.state.tvisit } id="tvisit" aria-label="Default select example" onChange={this.changeHandler} >
                    <option>Type of Visit</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Personal">Personal</option>
                </select>
                <div className="mb-3 mt-2 w-50">
                    <label htmlFor="Input3" className="form-label">Person to Visit</label>
                    <input type="text" id="person" value={ this.state.person } onChange={this.changeHandler} className="form-control"  placeholder="Person"/>
                </div>
                <div className="mb-3 mt-2 w-50">
                    <label htmlFor="Input4" className="form-label">Date of Visit</label>
                    <input type="date" defaultValue={date1} onChange={this.changeHandler} className="form-control" id="date" placeholder="Date"/>
                </div>
                <div className="mb-3 mt-2 w-50">
                    <label htmlFor="Input5" className="form-label">Time of Entry</label>
                    <input type="time" id="entrytime" value={ this.state.entrytime } onChange={this.changeHandler} className="form-control" />
                </div>
                <div className="mb-3 mt-2 w-50">
                    <label htmlFor="Input6" className="form-label">Time of Exit</label>
                    <input type="time" id="exittime" value ={ this.state.exittime } className="form-control" onChange={ this.changeHandler}/>
                </div>
                <button className="btn btn-primary mb-3">Submit</button>    
              </form>
                <h3>{viData ? (viData.name) : "Nothing is here"}</h3>
                <h2>{ this.state.name }</h2>
            </div>
        )
    }
}

export default VisitorForm
