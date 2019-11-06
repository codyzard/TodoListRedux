import {combineReducers} from 'redux';
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
const myReducer =  combineReducers({
    tasks, // tasks : tasks  
    isDisplayForm
})
// console.log(myReducer.isDisplayForm)
export default myReducer

