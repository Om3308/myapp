import React, { Component } from 'react'

class UseEffect_counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count} times `
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count!=prevState.count){
        console.log("componentDidUpdate ")
        document.title=`clicked ${this.state.count} times `

        }

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e=>this.setState({name:e.target.value})} />
                <button onClick={()=>this.setState({count:this.state.count+1})}> clicked {this.state.count}times </button>
            </div>
        )
    }
}

export default UseEffect_counter
