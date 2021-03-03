import React, { Component } from 'react'
import LogicDesign from './LogicDesign'
import FirstContext from './ContextValue'
class Microprocessor extends Component {
   // static contextType=FirstContext
    render() {
        return (
            <div>
                {/* Microprocessor professor name {this.context} */}
                <LogicDesign />
            </div>
        )
    }
}
// Microprocessor.contextType=FirstContext
export default Microprocessor
