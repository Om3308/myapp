import React, { Component } from 'react'
import { FirstConsumer } from './ContextValue'

class LogicDesign extends Component {
    render() {
        return (
            <div>
               <h3> i am logic design component </h3>
               <FirstConsumer> 
               {
                   name=>{
                       return <div> The professor name is {name} in logic design  </div>
                   }

               }
               </FirstConsumer>
            </div>
        )
    }
}

export default LogicDesign
