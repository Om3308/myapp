import React, { Component } from 'react'
class CallBackRefDemo extends Component {
    constructor(props) {
        super(props)
    this.cbRef=null;
    this.setcbrefs=element=>{
        this.cbRef=element
        }
    }
    componentDidMount(){
        if(this.cbRef)
        {this.cbRef.focus()}
    }
    clickhandler=()=>{alert(this.cbRef.value)}
    render() {
        return (
            <div>
                <input type="text" ref={this.setcbrefs}/>
                <button onClick={this.clickhandler}> Click Me </button>
            </div>
        )
    }
}

export default CallBackRefDemo
