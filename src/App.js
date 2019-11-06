import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import _ from 'lodash'
import {connect} from 'react-redux'
import * as actions from './actions/index'
class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      taskEditing: null,
      filter:{
        name: '',
        status: -1,
      },
      keyword: '',
      sortBy: 'name',
      sortValue :1
    }
  }
  onGenerate = ()=>{
    var tasks = [
      {
        id: this.generateID(),
        name: "study",
        status: true
      },
      {
        id:this.generateID(),
        name: "play",
        status: false
      },
      {
        id:this.generateID(),
        name: "gym",
        status: true
      }
    ]
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }
 
  addWork = () =>{
    this.props.toogleForm();
  }
  toogleWorkForm = ()=>{
    this.setState({
        isDisplayFrom: true
      }
    )
  }
  closeWorkForm =()=>{
    this.setState({
      isDisplayFrom: false
    })
  }
 /*  onUpdateStatus = (id) => {
    // var index = this.findIndex(id);
    var {tasks} = this.state;
    var index = _.findIndex(tasks, (task)=>{
      return task.id === id;
    })
    if(index !== -1){
      tasks[index].status =  !tasks[index].status;
      this.setState({
        tasks: tasks
      })
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
  } */
  checkForm(){
    if(this.state.isDisplayFrom === true){
      this.setState({
        isDisplayFrom: false
      })
    }
  }
  onUpdate = (id) => {
    this.checkForm();
    var index = this.findIndex(id);
    var {tasks} = this.state;
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    })
    this.toogleWorkForm();
  }
  findIndex = (id)=>{
    var {tasks} = this.state
    for (var i =0;  i < tasks.length; i++){
      if (id === tasks[i].id)
      {
        return i;
      }
    }
    return -1; 
  }
  onFilter = (filterName,filterStatus) =>{ // chua convert kieu
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      }
    })
  }
  onSearch = (keyword)=>{
    this.setState({
      keyword: keyword
    })
  }
  onSort = (sortBy,sortValue)=> {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }
  render(){
    var { 
        // filter,
        // keyword,
        sortBy,
        sortValue} = this.state // var tasks = this.state.tasks ES6 style
    var {isDisplayForm} = this.props
    console.log(isDisplayForm)
   /*  if (filter){
      if(filter.name){
        tasks = tasks.filter((task,index)=>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
     tasks = tasks.filter((task,index)=>{
       if(filter.status === -1){
         return task;
       }
       else{
        return task.status === (filter.status === 1 ? true : false);
       }
     })
    }
    if(keyword) { */
      /* tasks= tasks.filter((task,index)=>{
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) ==! -1;
      }) */
      //lodash
    /*   var tasks = _.filter(tasks, (task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      })
    }
    if (sortBy === 'name'){
      tasks.sort((a,b)=>{
        if(a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        return 0;
      })
    }
    else{
      tasks.sort((a,b)=>{
        if(a.status > b.status) return -sortValue;
        else if (a.status < b.status) return sortValue;
        return 0;
      })
    } */
    var elmTaskForm = isDisplayForm ?
    <TaskForm 
      taskEditing = {this.state.taskEditing}
      /> : ""
    return(
      <div className="container">
          <div className="text-center">
            <h1>Working Management</h1>  
          </div>
          <div className="row">
            <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
               {elmTaskForm}
            </div>
            
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-primary" onClick={this.addWork}>
                <span className="fa fa-plus mr-5"></span>
                Thêm Công Việc
              </button>
              <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerate}>
                <span className="fa fa-plus mr-5"></span>
                Generate Data
              </button>
              <br/>    
              <br/>        
                <Control onSearch={this.onSearch} onSort ={this.onSort} sortBy = {sortBy} sortValue={sortValue}/>
              <br/>
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList 
                    onUpdate={this.onUpdate}
                    onFilter = {this.onFilter}/>
                </div>
              </div>
            </div>
            
            
            
            
          </div>
      </div>
       )
  }
}
const mapStateToProps = (state)=>{
  return{
    isDisplayForm: state.isDisplayForm  
  }
}
const mapDispatchToProps =(dispatch,state)=>{
  return{
    toogleForm: ()=>{
      dispatch(actions.toogleForm())
    }
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
