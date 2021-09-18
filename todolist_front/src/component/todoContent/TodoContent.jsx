import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TodoContent_style.scss';

function TodoContent(props){

    const api = axios.create({
        baseURL : 'http://localhost:8080/api/todoList',
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    //T_TODO_CONTENT 삭제
    function deleteTodoContent(){
        console.log(props.todoList.todoSeq);
        api.post('/DeleteTodoContent' , null , {params : {
            userSeq : props.user.userSeq,
            todoSeq : props.todoList.todoSeq
         }}).then((res)=>{
             console.log(res.data)
            props.setTodoList(res.data)
         }).catch((error)=>{

         }); 
    }

    return(
    <div className="Todo_Content_Div">
        <span className="Todo_Content">{props.todoList.content}</span>
        <button className="Todo_Remove_Btn" onClick={deleteTodoContent}>remove</button>
    </div>
    )
}


export default TodoContent;