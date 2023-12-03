import React , {PureComponent } from 'react'

class PureComponents extends PureComponent {
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

    render(){
        console.log("Pure Components");
        return (
            <div>
                <h1>Pure Components</h1>
                <p>{this.state.count}</p>
                <button onClick={this.setToggle}>Set Toggle</button>
                <button onClick={this.setCount}>Increase</button>
            </div>
            
        )
    }
}

export default PureComponents