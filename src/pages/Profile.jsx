/* eslint-disable */
import React, { useState } from "react";

export default function Profile() {
let [TodoList, setTodoList] = useState (["","",""]); //입력값
let [write, setWrite] = useState (""); //글제목
let [Success, setSuccess] = useState(0); // 따봉
 




    return (
    


    <div>TodoList 작성 


<input type='text' className='title' onChange={(e)=> {setTodoList(e.target.value
    )}}>
    </input> 
    <button onClick={()=> {
if (TodoList == "") {
    alert("값을 입력해주세요")
    
}else{
let copy  = [...write];
copy.unshift(TodoList);
setWrite(copy)
console.log(write);
}}}>
    
입력
</button>






    <Modal  write = {write}></Modal> 
    </div>
    )
}


function Modal(props) {
return(
<div>
<h4>{props.write }
</h4>


</div>



)

}


