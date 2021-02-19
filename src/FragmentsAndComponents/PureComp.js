import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('$$ pure component $$')

        return (
            <div>
                <h4> i am a pure component {this.props.name}</h4>
            </div>
        )
    }
}

export default PureComp
