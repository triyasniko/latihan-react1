import React, { Component } from 'react'
const urlAPI='http://www.omdbapi.com/?i=tt3896198&apikey=d0a3cdbb';

class ApiFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrypost: []
        }
    }
    //Life Circle Component react
    componentDidMount() {
        this.GetDataAPi()
    }
    GetDataAPi() {
        fetch(urlAPI).then(res => {
            if (res.status === 200)
                return res.json()
            }).then(resdata => {
                console.log(resdata)
                this.setState({
                    arrypost: resdata
                })
        })
    }
}