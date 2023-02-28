import { useState } from 'react'
import './App.css'
import AddTaskForm from './Components/AddTaskForm';
import UpdateForm from './Components/UpdateTaskForm'
import Todo from './Components/Todo'


function App(){
  // Todo List State (Storing Tasks Data)
  const [todo,setTodo]=useState([
])
// Temp State ()
const[newTask,setNewTask]=useState("");
const[updateData,setUpdateData]=useState("");

// Add Task
const addTask=()=>{
if(newTask){
  let num= todo.length + 1
  let newEntry={id:num ,title:newTask,status:false}
  setTodo([...todo,newEntry]);
  setNewTask("")
}
}
// Delete Task
const deleteTask=(id)=>{
   let newTasks= todo.filter(task=>task.id !== id);
   setTodo(newTasks)
}
// Mark Task As Done
const markDone=(id)=>{
   let newTask =todo.map(task=>{
    if(task.id === id) {
      return ({...task,status :!task.status})
     }
    return task})
  setTodo(newTask)
}
// Cancel Update
const cancelUpdate=()=>{
setUpdateData('');
}
//Change Task For Update;
const changeTask=(e)=>{
    let newEntry={
      id:updateData.id,
      title:e.target.value,
      status:updateData.status?true:false,
    
    }
    setUpdateData(newEntry)
}
// Update Task;
const UpdateTask=()=>{
    let filterRecords= [...todo].filter(task=>task.id !==updateData.id)
    let updatedObject=[...filterRecords,updateData]
    setTodo(updatedObject);
    setUpdateData('')
  }
  
  return (
    <>
    <h2>To Do List App (ReactJs) </h2>
    <div className='wrapper'>
{/* Update Task */}
{updateData && updateData?(
<UpdateForm
updateData ={updateData}
changeTask={changeTask}
updateTask={UpdateTask}
cancelUpdate={cancelUpdate}/>
): (
<AddTaskForm
newTask={newTask}
setNewTask={setNewTask}
addTask={addTask}/>
)}

<br/>
    

      {todo && todo.length?"":"No Tasks....."}
     <Todo
     markDone={markDone}
     todo={todo}
     setUpdateData={setUpdateData}
     deleteTask={deleteTask}/>
    </div>
    </>
  )
    }
export default App
