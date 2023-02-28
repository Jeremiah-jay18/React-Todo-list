import React from 'react'

function UpdateForm({updateData,changeTask,updateTask, cancelUpdate}) {
  return (
    <div>
      <>
<div className="input">
        <div className="button">
          <div className='input-div'>
          <input onChange={(e)=>changeTask(e)}
          value={updateData && updateData.title} type="text" className="form-update" />
          </div>
          <button onClick={updateTask} className="btn">Update</button>
          <button  onClick={cancelUpdate} className="btn cancel">Cancel</button>
        </div>
      </div>
</>
    </div>
  )
}

export default UpdateForm
