import React, { Component } from 'react'
import HomePage from './HomePage'
import Login from './Login'

 class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    // let element;
    // element = isLoggedIn ? <HomePage/> : <Login/>
    render() {
        if(this.state.isLoggedIn){
            return <HomePage/>
        }
        else{
            return <Login/>
        }
    }
}
export default CONDITIONAL_RENDERING
