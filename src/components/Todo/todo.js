import React, {useState,useEffect} from 'react';
function Todo() {
 const [list,setList] = useState([])
 const [newItem,setNewItem] = useState('')
 console.log(list,newItem)   
    return (
       <div>
        <input onChange={(e) => setNewItem(e.target.value)  } placeholder='Add a To do List Item' />
        <button onClick={() => setList([...list,newItem])}>Add Task</button>   
        <div>
          { list && list.map((el,index) => {
        return  <h1 onClick={() => setList(list.filter(item => item != el)) }>{el}</h1>    
          })}  
        </div>
       </div>
    )
}


export default Todo