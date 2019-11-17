import React, { Component } from "react";
// import Task from './Task';
class ShowTasks extends Component{
  constructor(props){
    super(props);
    this.state = {
      isCliked: true
    }
  }
  
  handleSubmit = e => {
    return true;
  }
  render(){
    const task = this.props.details.tasks;
    return (
      <div>
        <ul>
          {task.map((tasks, index) => (<li key={index}>{tasks.task}</li>)) }
        </ul>
        <button onClick = {this.handleSubmit}>button</button>
      </div>
    )
  }
}

export default ShowTasks;