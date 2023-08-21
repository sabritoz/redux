import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
        title:'Learn DataBase',
        done:false
    },
    {
        title:'Learn CSS',
        done:true
    },
    {
        title:'Learn JavaScript',
        done:true
    },
    {
        title:'Learn React',
        done:false
    },
    {
        title:'Learn HTML',
        done:true
    },  
]
}

export const TaskSlice = createSlice({
  name: 'cardlist',
  initialState,
  reducers: {
    addtask:(state,action)=>{
        state.tasks=[...state.tasks,action.payload]
    }
  },
})


export const { addtask } = TaskSlice.actions

export default TaskSlice.reducer