/* eslint-disable */
import React, { useState } from 'react'

export default function TodoComponent() {

    const [todos, setTodos] = useState([
        {
          id: 1,
          text: '리액트 기초 알아보기',
          checked: true,
        },
        {
          id: 2,
          text: '컴포넌트 스타일링 하기',
          checked: true,
        },
        {
          id: 3,
          text: '투두리스트 만들기',
          checked: false,
        },
      ]);

    const handleTodoInput= ()=>{
        console.log("input에 있는 내용을 리스트에 넣기");
    }

    
  return (
    <div>
        <input type="text" />
        <button onClick={handleTodoInput}>입력</button>

        <ul>
            {todos.map((item)=>
                (<li>
                    <input type="checkbox" name="" id="" checked={item.checked}/>
                    <span>{item.text}</span>
                    <button>삭제</button>
                </li>)
            )}
        </ul>
    </div>
  )
}
