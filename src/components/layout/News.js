import React, { Component } from 'react'
import axios from 'axios'

class News extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             newslists: []
        }
    }
    
    componentDidMount() {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&from=2021-05-20&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98")
            .then(res => {
                console.log(res.data)
                this.setState({
                    newslists: res.data.articles
                })
            })
            .catch(err => {
                console.log(err)
            } )
    }

    render() {
        const { newslists } = this.state;
        return (
            <div className="container">
                <div className="row">
                {
                    newslists.length ? (newslists.map(newslist => {
                        return (
                            <div className="col-10 col-lg-2 mx-auto mb-2" key={Math.random()} style={{ width: "24rem" }}>
                                <div className="card-body">
                                    <h4 className="card-title">Author: {newslist.author}</h4>
                                    <p className="card-text"> {newslist.content} </p>
                                    <p className="card-test">Description: {newslist.description} </p>
                                    <a href={newslist.url} className="btn btn-info mb-2">More Information</a>
                                    <img src={newslist.urlToImage} alt="" className="w-100" />
                                    <p>Source: { newslist.source.name}</p>
                                </div>
                            </div>
                        )
                    }
                    )) : <div> No items to display </div> 
                }
                </div>
            </div>
        )
    }
}

export default News
