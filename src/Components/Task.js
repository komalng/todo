import React,{Component} from "react";
import ShowTasks from "./ShowTasks";
// import ShowTask from './ShowTasks';
class Task extends Component{
  constructor(){
    super()
    this.state = {
      task:"",
      date:"",
      time:"",
      tasks:[],
      isClicked:false
    }
  }
  
  handleChange = event => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = e => {
    e.preventDefault()
    const details = {task: this.state.task, date: this.state.date, time:this.state.time}
    this.setState({tasks: [...this.state.tasks, details], isClicked:true})
    console.log(this.state)
  }

  render(){
    const br =<br/> 
    return <div>
      <h1>ToDo List</h1>
      <form >
        Task <input type = "text" name = "task"  onChange = {this.handleChange}/> {br} {br}
        Date <input type = "Date" name = "date" onChange = {this.handleChange}/>{br}{br}
        Time <input  type ="Time" name = "time" onChange = {this.handleChange}/>{br}{br}
       <button onClick = {this.handleSubmit} >button</button> {br}{br}       
      </form>
      {this.state.isClicked ? <ShowTasks details={this.state} />: null}
    </div>
  }
}


export default Task;