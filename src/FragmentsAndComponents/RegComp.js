import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('$$ regular component $$')
        return (
            <div>
                <h4> i am regular Component {this.props.name}</h4>
            </div>
        )
    }
}

export default RegComp
