import React, { Component } from 'react'

export default class EVENT_HANDLER extends Component {
constructor(props) {
    super(props)

    this.state = {
         changedValue: ''
    }
}
handleOnChange = (e) =>{
this.setState({
    changedValue:e.target.value
},()=>{
    console.log(this.state.changedValue)
})
}


    render() {
        return (
            <div>
               <input type="text" onChange={this.state.handleOnChange}></input>
               <p>{this.state.changedValue}</p>
            </div>
        )
    }
}
