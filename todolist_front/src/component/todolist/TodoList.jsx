/* eslit-disable */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TodoList_style.scss';
import {useLocation} from 'react-router';





function TodoList(props){

    let [todoList , setTodoList] = useState([]);
    let [addContent , setAddContent] = useState('');
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    let [todoListLoad , setTodoListLoad] = useState('N');


    const api = axios.create({
        baseURL : 'http://localhost:8080/api/todoList',
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    
    //T_TODO_CONTENT 조회
    function getAllTodoList(){
        api.post('/getAllTodoContent' , null , {params : {
            userSeq : props.user.userSeq
         }}).then((res)=>{
             console.log(res.data);
             setTodoList(res.data);
         }).catch((error)=>{
             alert(error);
         }); 
         setTodoListLoad('Y');
    }

    //T_TODO_CONTENT 추가
    function addTodoList(e){
        if(e.key === 'Enter'){
            console.log("add");
            console.log(addContent);
            api.post('/AddTodoContent' , null , {params : {
                userSeq : props.user.userSeq,
                content : addContent
             }}).then((res)=>{
                console.log(res.data);
                setTodoList(res.data);
             }).catch((error)=>{
                 alert(error);
             }); 
            setAddContent('');
        }
    }

    //T_TODO_CONTENT 전체 삭제
    function TodoListDeleteAll(){
        console.log(props.user.userSeq);
        api.post('/DeleteTodoContentAll' , null , {params : {
            userSeq : props.user.userSeq
         }}).then((res)=>{
             setTodoList([]);
         }).catch((error)=>{
             alert(error);
         }); 
    }

    return(
        <div className="todoList_area">
            <div className="time_area">
                <div className="time">
                    <h2>{year}</h2>
                    <h2>{month}</h2>
                    <h2>{date}</h2>
                </div>
            </div>
            <div className="todoList">
                {
                    todoListLoad === 'Y' 
                    ? (
                        <div className="Todo_Add">
                            <input type="text" className="Todo_Add_Input" value={addContent} onKeyPress={addTodoList} onChange={(e)=>{setAddContent(e.target.value)}} />
                        </div>
                    ) : null
                }
                {
                    todoListLoad === 'N' 
                    ? (
                        <div className="Todo_Get_Div">
                            <button onClick={getAllTodoList} className="getTodoBtn">TODO - LIST</button>
                        </div>
                    )  : null
                }
                {
                    todoListLoad === 'Y'
                    ? (
                        todoList.map((todoList , i)=>{
                            return  <TodoContent todoList={todoList} key={i}  setTodoList={setTodoList} user={props.user}/>
                        })
                    ) : null
                }
            </div>
            <div className="add_area">
                <div className="menu_area">
                    <button className="allDelete" onClick={TodoListDeleteAll}><b>All<br />remove</b></button>
                </div>
            </div>
        </div>
    )
}

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


export default TodoList;


