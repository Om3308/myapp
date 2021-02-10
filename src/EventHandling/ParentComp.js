import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentdata:'parent Component'
        }
        this.parentMethod=this.parentMethod.bind(this)
    }
    
    parentMethod(){
        alert('These is Parent Component Method ')
    }
    render() {
        return (
            <div>
                <ChildComp hander={this.parentMethod}/>
            </div>
        )
    }
}

export default ParentComp
