import './App.css';
import React ,{Component} from "react";
import Prop from "./components/Prop"
class App extends Component{
  state={
    age:" ",
    check:" "
  };
ageCheck =()=>{
  const check=this.state.check
  this.setState({check:this.state.age >=18 ? (<div className="green" >{this.state.age}</div>) :(<div className="red" >{this.state.age}</div>)})
 this.setState({age:" "})
  
}

  render(){
    
    return <div>
      
      <input onChange={(e)=>{this.setState({age: e.target.value})}}value={this.state.age}></input>
      <button onClick={()=>{
        
    
        this.ageCheck()
        }} >check</button>
      <Prop check={this.state.check}></Prop>
      
      
    </div>
  }
}


export default App;
