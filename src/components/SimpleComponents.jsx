import React, { Component } from 'react'

class SimpleComponents extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            toggle:true
        }
    }

    setToggle=()=>{
        this.setState({toggle: !this.state.toggle})
    }

    setCount=()=>{
        if(this.state.toggle){
            this.setState({count: this.state.count+1})
        }
    }

    render() {
        console.log("Simple Components");
        return (
            <div>
                <h1>Simple Components</h1>
                <p>{this.state.count}</p>

                <button onClick={this.setToggle}>Set Toggle</button>
                <button onClick={this.setCount}>Increase</button>
            </div>
            
        )
    }
}

export default SimpleComponents