import React, { Component } from 'react'

class LifeCycleChild extends Component {
    constructor(props) {
        super(props);
        console.log('constructor child')
            this.state = {
             name:'sansa'
        }
    }
 static getDerivedStateFromProps(){
     console.log('getDerivedStateFromProps child')
     return null;
 }
 componentDidMount(){
     console.log('componentDiDMount child')
 }
 shouldComponentUpdate(){
     console.log('shouldComponentUpdate')
     return true
 }
 getSnapshotBeforeUpdate(){
     console.log('getsnapshotbeforeupdate')
     return null
 }
 componentDidUpdate(){
     console.log('componentdidUpdate')
 }
 componentWillUnmount(){
     console.log('componentwillunmount')
 }
 changeData=()=>{
     this.setState({
         name:'aarya'
     })
 }
    render() {
        console.log('render method child')
        return (
            <div>
        <h5> life cycle method</h5>
        <button onClick={this.changeData}> click me</button>
            </div>
        )
    }
}

export default LifeCycleChild
