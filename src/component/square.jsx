import React,{useState} from 'react';
import ReactDOM from 'react-dom';
 
const Square=(props)=>
{
   

  return (
    <div onClick={props.onClick} className='square'>
        <h5>{props.value}</h5>
    </div>
  );
}
 
export default Square;
