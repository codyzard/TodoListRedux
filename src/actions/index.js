import * as types from '../constants/ActionTypes'

export const listAll = ()=> {
    return {
        type : types.LIST_ALL
    }
}
export const addTask = (task)=>{
    return {
        type: types.ADD_TASK,
        task // task: task,
    }
}
export const toogleForm = ()=>{
    return {
        type: types.TOOGLE_FORM,
    }
}
export const closeForm = ()=>{
    return {
        type: types.CLOSE_FORM,
    }
}
export const openForm = ()=>{
    return {
        type: types.OPEN_FORM,
    }
}
export const updateStatus = (id) =>{
    return{
        type: types.UPDATE_STATUS,
        id
    }
}
export const deleteTask = (id)=>{
    return{
        type: types.DELETE_TASK,
        id
    }
}