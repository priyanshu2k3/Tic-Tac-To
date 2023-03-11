import React ,{useState}from 'react';
// import ReactDOM from 'react-dom';
import Square from './square';
//import { useState } from 'react';
 
const Board=()=>
{
     const handelClick=(index)=>{
        if(index!==null){return}
        console.log(index)
        var copyState=[...state];
        copyState[index]=Xturn?"X":"O"
        setState(copyState);
        setTurn(!Xturn);

     }
    const [state,setState]=useState(Array(9).fill(null));
    const [Xturn,setTurn]=useState(true);
    console.log(state)

    const checkWinner=()=>{
    const winnerLogic=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let logic of winnerLogic){
        let [a,b,c]=logic;
        if (state[a]!==null && state[a]==state[b] && state[a]==state[c] ){return(state[a])};
    }
    }
  const iswinner=checkWinner();
  const handelRefresh=()=>{
    setState(Array(9).fill(null));
  }
  return (
    <div className='board-container'>
        {iswinner?<h3>{iswinner} won the Game <button onClick={handelRefresh}>Play Again</button></h3>:
        <>
        <h3>Player {Xturn?"X":"O"} Turn</h3>
        <div className='board-row'>
            <Square onClick={()=>{handelClick(0)}} value={state[0]}/>
            <Square onClick={()=>{handelClick(1)}} value={state[1]}/>
            <Square onClick={()=>{handelClick(2)}} value={state[2]}/>
        </div>

        <div className='board-row'>
            <Square onClick={()=>{handelClick(3)}} value={state[3]}/>
            <Square onClick={()=>{handelClick(4)}} value={state[4]}/>
            <Square onClick={()=>{handelClick(5)}} value={state[5]}/>
        </div>

        <div className='board-row'>
            <Square onClick={()=>{handelClick(6)}} value={state[6]}/>
            <Square onClick={()=>{handelClick(7)}} value={state[7]}/>
            <Square onClick={()=>{handelClick(8)}} value={state[8]}/>
        </div>
        </>
        }
    </div>
  );
}
 
export default Board;
