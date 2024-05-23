import React, {useState} from 'react';
import './styles.css';


const AddTask= ({handleClick}) => {

    const [text,setText] = useState('');

  return (
    <div className='addTask'>
      <input className='inputText' type="text" placeholder='Add Todo Task' value={text}  onChange={(e) =>{
        setText(e.target.value);

       
    }}/>
      <button  className="btnAdd" onClick={() =>{
        handleClick(text);
        setText('');
      }}>Add</button>
    </div>
  )
}

export default AddTask;
