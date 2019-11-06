import * as types from '../constants/ActionTypes'

var randomID = ()=>{
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
var generateID = () =>{
    return randomID() + randomID() + '-' + randomID()+ '-' + randomID() + '-'+
    randomID() + '-' + randomID()  + randomID() + randomID() + randomID();
}
var findIndex = (tasks,id)=>{
    for (var i =0;  i < tasks.length; i++){
      if (id === tasks[i].id)
      {
        return i;
      }
    }
    return -1; 
  }

var data = JSON.parse(localStorage.getItem("tasks"))
var initialState = data ? data : [];
var myReducer = (state = initialState, action)=>{
    var id = action.id
    var index = findIndex(state,id);
    switch(action.type){
        case types.LIST_ALL: 
            return state;
        case types.ADD_TASK:
            let newTask = {
                id: randomID(),
                name: action.task.name,
                status: action.task.status 
            }
            state.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]; // copy mang moi roi tra ve
        case types.UPDATE_STATUS:
           /*  var cloneTask = {...state[index]};
            cloneTask.status = !cloneTask.status;
            state[index] =  cloneTask; */
            //cach viet khac
            state[index]= {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state];
        case types.DELETE_TASK:
           
            state.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state];
        default: return state;    
    }
}
export default myReducer;