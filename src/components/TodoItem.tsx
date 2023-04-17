import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string;onRemoveTodo:(event:React.MouseEvent)=>void}> = (props) => {
  return <li className={classes.item} >
    {props.text}
    <button className={classes.deleteBtn} onClick={props.onRemoveTodo} > Delete </button>
    </li>;
};

export default TodoItem;
