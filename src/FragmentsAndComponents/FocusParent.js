import React, { Component } from 'react'
import InputDemo from './InputDemo'

 class FocusParent extends Component {
     constructor(props) {
         super(props)
     
         this.parentRef=React.createRef()
     }
     
    clickHandler=()=>{
        this.parentRef.current.focusToElement()
    }
    render() {
        return (
            <div>
                <InputDemo ref={this.parentRef}/>
                <button onClick={this.clickHandler}> Add_focus</button>
            </div>
        )
    }
}

export default FocusParent
