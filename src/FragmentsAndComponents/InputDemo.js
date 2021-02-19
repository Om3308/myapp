import React, { Component } from 'react'

class InputDemo extends Component {
    constructor(props) {
        super(props)
    this.inputRef=React.createRef();
    }
    focusToElement(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <h1> i am inputdemo Component</h1>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default InputDemo
