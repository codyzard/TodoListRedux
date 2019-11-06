import React from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class TaskForm extends React.Component{

    constructor(props){
      super(props);
      this.state ={
        id: "",
        name: "",
        status:false
      }
    }
    componentWillMount(){
      var {taskEditing} = this.props
      if(taskEditing)
      this.setState({
        id: taskEditing.id,
        name: taskEditing.name,
        status: taskEditing.status
      })
    }
    componentWillReceiveProps(nextProps){
      if(nextProps && nextProps.taskEditing)
      {
        var taskEditing = nextProps.taskEditing;
        this.setState({
          id: taskEditing.id,
          name: taskEditing.name,
          status: taskEditing.status
        })
      }
      else if (!nextProps.taskEditing){
        this.setState({
          id: '',
          name: '',
          status: false,
        })
      }
    }
    closeAddWork = () =>{
      this.onClear();
      console.log(this.props.onCloseForm());
    }
    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      if (name === 'status'){
        value = target.value === 'true'? true :false;
      }
      this.setState({
        [name]: value
      })
    }
    onSubmit = (event)=>{
      event.preventDefault();
      this.props.onAddTask(this.state);
      this.onClear();
      this.closeAddWork();
    }
    onClear = ()=>{
      this.setState({
        name: '',
        status: false
      })
    }
    onUpdate = ()=>{
    }
    render(){
      // var that =this;
        return(
            <div className="panel panel-warning">
                    <div className="panel-heading">
                      <h3 className="panel-title">{this.props.taskEditing === null ? "Thêm công việc " : "Cập nhật công việc"}
                        <i 
                          className="fas fa-times-circle text-right" 
                          onClick={this.closeAddWork}>
                        </i>
                      </h3>
                    </div>
                    <div className="panel-body">
                      <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                          <label>Tên :</label>
                          <input 
                            type="text"  id="cc"
                            value = {this.state.name}
                            className="form-control" 
                            name="name" 
                            defaultValue=""
                            onChange = {this.onChange}
                          />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" name="status"  onChange = {this.onChange} value={this.state.status}>
                          <option value={true}>Kích Hoạt</option>
                          <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                          <button type="submit" className="btn btn-warning" >
                            <span className="fa fa-plus mr-5"></span> Lưu Lại
                          </button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick= {this.onClear}>
                              <span className="fa fa-close mr-5"></span> Hủy Bỏ
                            </button>
                          </div>
                      </form>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state)=> {
  return{

  }
};
const mapDispatchToProps = (dispatch,state)=>{
  return {
    onAddTask: (task)=>{
      dispatch(actions.addTask(task))
    },
    onCloseForm: ()=>{
      dispatch(actions.closeForm());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);

