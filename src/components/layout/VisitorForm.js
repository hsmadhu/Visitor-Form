
import React, { Component } from 'react'

export class VisitorForm extends Component {

    
    visitorData;

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
        localStorage.setItem('HighestId', this.state.id+1)      
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
        let id1 = localStorage.getItem('HighestId')
        if (id1 != null) {
            this.setState({
                id: Number(id1)
            })
        
        }
    }

    
    componentDidUpdate(nextProps, nextState) {
         localStorage.setItem(this.state.id.toString(), JSON.stringify(nextState));
     }
    

    render() {
        var curr = new Date();
        var date1 = curr.toISOString().substr(0, 10);
        var viData = localStorage.getItem('1')
        var viData1 = JSON.parse(viData)
        return (
            <div className="container">
               <form className="form-group" onSubmit={this.submitHandler}> 
                <div className="mb-3 mt-2 w-50">
                    <label htmlFor="Input1" className="form-label">Name:</label>
                        <input type="text" value={ this.state.name } id="name" className="form-control" onChange={this.changeHandler} placeholder="Name"/>
                </div>
                <div className="mb-3 mt-2 w-50">
                    <label htmlFor="Input2" className="form-label">Email address</label>
                    <input type="email" id="email" value={ this.state.email } onChange={this.changeHandler} className="form-control" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 w-50">
                    <label htmlFor="formFile" className="form-label">Upload Selfie</label>
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
                <div>
                    {
                       //viData1.id ? (<div>{viData1.id}</div>) : null
                        
                    }
                </div>
            </div>
        )
    }
}

export default VisitorForm
