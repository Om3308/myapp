import React from 'react'

const FinalComponent=(OriginalComponent,countnum)=>{
class NewComponent extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count:1
        }
    }
    increment=()=>{
        this.setState((prevState)=>{
            return {
                count:prevState.count+countnum
            }

        })
    }
    render(){
        // console.log(this.props.name)
        return <OriginalComponent count={this.state.count} increment={this.increment}
        {...this.props}/>
    }
}
return NewComponent
}

export default FinalComponent