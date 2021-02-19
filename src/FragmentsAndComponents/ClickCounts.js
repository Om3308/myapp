import React, { Component } from 'react'
import FinalComponent from './withCounter'
class ClickCounts extends Component {
    
    render() {
        const{ count,increment}=this.props
        return (
            <div>
                <h2> {this.props.name}</h2>
                <button onClick={increment}> button cliked {count} </button>
            </div>
        )
    }
}

export default FinalComponent(ClickCounts,3)
