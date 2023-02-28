import React from 'react'

function AddTaskForm({newTask,setNewTask,addTask}) {
  return (
    <div>
    
  {/* Add Task */}
  <div className="input">
        <div className="button">
          <div className='input-div'><input value={newTask} onChange={(e)=>setNewTask(e.target.value)}
           type="text" className="form" /></div>
          <button  onClick={addTask} className="btn">Add Task</button>
        </div>
      </div>
      
    </div>
  )
}

export default AddTaskForm
