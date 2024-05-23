import React, {useState} from 'react';
import AddTask from './AddTask';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { addTask, toggleTaskStatus } from '../listSlice';

  const TodoList = () =>  {
   const [todoList,setTodolist] = useState([]);

   const dispatch = useDispatch();

   const list = useSelector((store) => store.list.tasks);
   
    const handleAdd = (todo) =>{
       let a =list.find((item) => item.task  ===  todo);
       if(a) return;
        setTodolist([...todoList,{task:todo, status: false}])
        dispatch(addTask({ task:todo, status: false}));
        setTodolist([]);
    }

    const handleToggleClick = (item) =>{
            let obj = list.map((val) =>{
                if(val.task ===  item.task ){
                    return {...val, status : !val.status}
                }
                    return val;
            });
            setTodolist(obj);
            dispatch(toggleTaskStatus ({ task: item.task }));
    }


    console.log(todoList,"todoList");
  return (
    <>
            <AddTask handleClick={handleAdd} />
            <div className="row row-header">
                <div className="column header" >
                    To Do
                </div>
                <div className="column header" >
                    Status
                </div>
            </div>
            {list && list?.map((item,index) => (
            <div className="row" key={index}  data-testid="todoCard">
                <div className="column" >
                {item.task}
                </div>
                <div className="column status">
                <label className="toggle">
                <input type="checkbox" className="toggle-checkbox" checked={item.status} onChange={() => handleToggleClick(item)} />
                <span className="toggle-slider"></span>
                </label>
                </div>
            </div>
         ))}
    </>
  )
}

export default TodoList;
