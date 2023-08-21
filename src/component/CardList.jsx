import React, { useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { addtask } from '../store/slices/TaskSlice';
const CardList = () => {
  let array=useSelector(state=>state.cardlist.tasks) 
  const [newTask, setnewTask] = useState({
    title:'',
    done:false
  })
  const [show, setshow] = useState(0)
  const dispatch=useDispatch()
  return (
    <div className='cardlist'>
      <div className='sth'>
        <button onClick={()=>setshow(0)}>All</button>
        <button onClick={()=>setshow(1)}>Done</button>
        <button onClick={()=>setshow(2)}>Not Done</button>
        <input type="text"  onChange={(e)=>setnewTask({...newTask,title:e.target.value})}/>
        <button onClick={()=>dispatch(addtask(newTask))}>Add</button>
      </div>
      {array
      .filter(el=>show===1?el.done===true:show===2?el.done===false:array)
      .map(el=><Card el={el}/>)}
    </div>
  )
}

export default CardList