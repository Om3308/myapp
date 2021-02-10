import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor')
            this.state = {
             name:'sansa'
        }
    }
 static getDerivedStateFromProps(){
     console.log('getDerivedStateFromProps')
     return null;
 }
 componentDidMount(){
     console.log('componentDiDMount')
 }
    render() {
        console.log('render method')
        return (
            <div>
        <h5> life cycle method</h5>
        <LifeCycleChild />
            </div>
        )
    }
}

export default LifeCycle
