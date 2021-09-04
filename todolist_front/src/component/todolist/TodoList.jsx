/* eslit-disable */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TodoList_style.scss';
import {useLocation} from 'react-router';





function TodoList(props){

    let [todoList , setTodoList] = useState([]);

    const api = axios.create({
        baseURL : 'http://localhost:8080/api/todoList',
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    function getAllTodoList(){
        api.post('/getAllTodoContent' , null , {params : {
            userSeq : props.user.userSeq
         }}).then((res)=>{
             console.log(res.data);
             setTodoList(res.data);
         }).catch((error)=>{
             alert(error);
         }); 
    }

    return(
        <div className="todoList_area">
            <div className="time_area">
                <div className="time">
                    <h2>2021</h2>
                    <h2>08</h2>
                    <h2>31</h2>
                </div>
            </div>
            <div className="todoList">
               {/*  <div className="Todo_Add">
                    <input type="text" className="Todo_Add_Input" />
                </div> */}
                <div className="Todo_Get_Div">
                    <button onClick={getAllTodoList} className="getTodoBtn">TODO - LIST</button>
                </div>
               {/*  <div className="Todo_Content_Div">
                    <span className="Todo_Content">할일 1번</span>
                    <button className="Todo_Remove_Btn">remove</button>
                </div>
                */}
            </div>
            <div className="add_area">
                <div className="comment">
                    
                </div>
            </div>
        </div>
    )
}




export default TodoList;


