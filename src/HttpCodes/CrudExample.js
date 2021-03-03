import React, { Component } from 'react'

class CrudExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'simple CRUD operation' ,
             datas:[],
             act:0,
             index:''
        }
    }
   
      fSubmit = (e) =>{
    
        e.preventDefault();
        
        console.log('try');
        console.log(this.refs);
    
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;
    
        if(this.state.act === 0)
        {   
          let data = {name, address}
          datas.push(data);
          
        }
        else{
            let index=this.state.index;
            datas[index].name=name;
            datas[index].address=address;
        }
        this.setState({
            datas:datas,
            act:0
        })
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    
      fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
          datas: datas
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    
      fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;
    
        this.setState({
          act: 1,
          index: i
        });
    
        this.refs.name.focus();
      }  
    componentDidMount(){
        this.refs.name.focus()
    }
      render() {
        let datas = this.state.datas;
        return (
          <div className="App">
            <h2>{this.state.title}</h2>
            <form ref="myForm" className="myForm">
              <table>
                <tr>
                  <th>
              <label> Name : </label></th>
              <td>
              <input type="text" ref="name" placeholder="your name" />
              </td></tr>
              <tr>
              <th>
            <label> Address :</label>
            
            </th><td>
             <input type="text" ref="address" placeholder="your address" />
             </td>
             </tr>
             <tr>
             <td> </td>
              <td><button onClick={(e)=>this.fSubmit(e)} className="btn btn-primary">submit </button>
              </td></tr></table>
            </form>
            <br></br>
            
          
              <table>
              {
              datas.map((data, i) =>
              <tbody>
                <tr key={i}>
    
                  <td> {i+1}</td> <td> {data.name}</td> <td> {data.address}</td>
                  <td><button onClick={()=>this.fRemove(i)} className="btn btn-danger">remove </button> </td>
                 <td> <button onClick={()=>this.fEdit(i)} className="btn btn-success">edit </button></td>
             </tr>
              </tbody>
              )}
              </table>
          </div>
        );
      }
    

}

export default CrudExample
