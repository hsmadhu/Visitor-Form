import React, { Component, memo } from 'react';


class Home extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeTvisit = this.onChangeTvisit.bind(this);
        this.onChangePerson = this.onChangePerson.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeEntrytime = this.onChangeEntrytime.bind(this);
        this.onChangeExittime = this.onChangeExittime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            file: '',
            tvisit: '',
            person: '',
            date: '',
            entrytime: '',
            exittime: ''
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    onChangeFile(e) {
        this.setState({ file: e.target.value })
    }

    onChangeTvisit(e) {
        this.setState({ tvisit: e.target.value })
    }

    onChangePerson(e) {
        this.setState({ person: e.target.value })
    }

    onChangeDate(e) {
        console.log("Home date", e.target.value)
        this.setState({ date: e.target.value })
    }

    onChangeEntrytime(e) {
        this.setState({ entrytime: e.target.value })
    }

    onChangeExittime(e) {
        this.setState({ exittime: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: '',
            email: '',
            phone: '',
            file: '',
            tvisit: '',
            person: '',
            date: '',
            entrytime: '',
            exittime: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone,
                // file: this.userData.file,
                tvisit: this.userData.tvisit,
                person: this.userData.person,
                date: this.userData.date,
                entrytime: this.userData.entrytime,
                exittime: this.userData.exittime
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: '',
                file: '',
                tvisit: '',
                person: '',
                date: '',
                entrytime: '',
                exittime: ''
            })
        }
    }

    componentDidUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    
                    <div className="mb-3 w-50">
                        <label htmlFor="file" className="form-label">Upload Selfie</label>
                        <input className="form-control" value={ this.state.file } id="file" onChange={this.onChangeFile} type="file" />
                    </div>
                    <div className="form-group">
                        <select className="form-select" aria-label="Default select example" value={ this.state.tvisit } onChange={this.onChangeTvisit} >
                            <option>Type of Visit</option>
                            <option value="Meeting">Meeting</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Personal">Personal</option>
                        </select>
                    </div>    
                    <div className="form-group">
                        <label>person</label>
                        <input type="text" className="form-control" value={this.state.person} onChange={this.onChangePerson} />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control" value={this.state.date} onChange={this.onChangeDate} />
                    </div>
                    <div className="form-group">
                        <label>Entry Time</label>
                        <input type="text" className="form-control" value={this.state.entrytime} onChange={this.onChangeEntrytime} />
                    </div>
                    <div className="form-group">
                        <label>Exit Time</label>
                        <input type="text" className="form-control" value={this.state.exittime} onChange={this.onChangeExittime} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-3 mt-3 ">Submit</button>
                </form>
                <h2 className="mb-3 text-center">List of Visitors</h2>
                
            </div>
        )
    }
}
export default memo(Home)
