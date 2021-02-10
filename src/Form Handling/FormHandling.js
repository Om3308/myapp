import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             address:'',
             qualification:''
        }
    }
    changeHandler=(event)=>{
        this.setState({
            name:event.target.value
        })

    }
    changeAddress=(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    changeQualification=event=>{
        this.setState({
            qualification:event.target.value
        })
    }
    submitData=event=>{
        alert(`${this.state.name} ${this.state.address} ${this.state.qualification}`)
   event.preventDefault()
    }

    handleData=event=>{
        // console.log(event.target.name)
// this.setState({
//     [event.target.name]:event.target.value
// })
const value=event.target.name==='name'?event.target.value.toUpperCase():event.target.value;
this.setState({
    [event.target.name]:value
})
    }
    render() {
        return (
            <div>
               <h4> Form Handling Demo</h4> 
               <form onSubmit={this.submitData}>
                   <div>
                       <label> Name:</label>
                       <input type='text' value={this.state.name} name='name' onChange={this.handleData} />
                       </div>
                       <div>
                           <label> address:</label>
                           <textarea value={this.state.address} name='address' onChange={this.handleData}> </textarea>
                       </div>
                       <div>
                           <label> qualification</label>
                           <select value={this.state.qualification} name='qualification' onChange={this.handleData}>
                               <option value='be'> BE</option>
                               <option value='mcs'> MCS </option>
                               <option value='bcs'> BCS </option>
                           </select>
                       </div>
                       <div>
                           <button type='submit'> submit</button>
                       </div>

               </form>
            </div>
        )
    }
}

export default FormHandling
