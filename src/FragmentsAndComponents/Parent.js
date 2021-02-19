import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'


class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'tqpp'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'tqpp'
            })
        },3000)
    }
    
    render() {
        console.log('$$$$ parent component $$$$')

        return (
            <div>
                <h4> parent Component</h4>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default Parent
